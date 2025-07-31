import {
  Injectable,
  Logger,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from '../prisma/prisma.service';

export interface UserStats {
  user_id: number;
  name: string;
  email: string;
  totalAttempts: number;
  averageScore: number;
  totalPoints: number;
  bestScore: number;
  lastAttempt: Date | null;
}

/**
 * Service Leaderboard – Logique métier pour la gestion du classement et des statistiques dans QuizzApp.
 *
 * Rôle :
 *   - Calculer et retourner le classement général, par matière, les stats utilisateur et les meilleurs scores récents.
 *
 * Gestion d’erreurs :
 *   - Toutes les erreurs sont gérées avec les exceptions NestJS appropriées (NotFoundException, BadRequestException, InternalServerErrorException).
 *   - Les erreurs Prisma sont capturées et transformées en exceptions adaptées.
 *
 * Logging :
 *   - Chaque action métier (calcul, récupération) est logguée via le logger NestJS.
 */
@Injectable()
export class LeaderboardService {
  private readonly logger = new Logger(LeaderboardService.name);

  constructor(private prisma: PrismaService) {}

  /**
   * Récupérer le classement général basé sur les scores moyens
   */
  async getGeneralLeaderboard(limit: number = 10): Promise<UserStats[]> {
    this.logger.log(`Récupération du classement général (limit=${limit})`);
    try {
      const leaderboard = await this.prisma.user.findMany({
        select: {
          user_id: true,
          name: true,
          email: true,
          quizAttempts: {
            where: {
              status: 'COMPLETED',
              score: { not: null },
              total_questions: { not: null },
            },
            select: {
              score: true,
              total_questions: true,
              completed_at: true,
              quiz: {
                select: {
                  title: true,
                  subject: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
            orderBy: {
              completed_at: 'desc',
            },
          },
        },
      });

      // Calculer les statistiques pour chaque utilisateur
      const userStats: UserStats[] = leaderboard.map((user) => {
        const completedAttempts = user.quizAttempts.filter(
          (attempt) =>
            attempt.score !== null && attempt.total_questions !== null,
        );
        const totalAttempts = completedAttempts.length;

        if (totalAttempts === 0) {
          return {
            user_id: user.user_id,
            name: user.name,
            email: user.email,
            totalAttempts: 0,
            averageScore: 0,
            totalPoints: 0,
            bestScore: 0,
            lastAttempt: null,
          };
        }

        const totalPoints = completedAttempts.reduce((sum, attempt) => {
          const percentage = (attempt.score! / attempt.total_questions!) * 100;
          return sum + percentage;
        }, 0);

        const averageScore = totalPoints / totalAttempts;
        const bestScore = Math.max(
          ...completedAttempts.map(
            (attempt) => (attempt.score! / attempt.total_questions!) * 100,
          ),
        );
        const lastAttempt = completedAttempts[0]?.completed_at || null;

        return {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          totalAttempts,
          averageScore: Math.round(averageScore * 100) / 100,
          totalPoints: Math.round(totalPoints),
          bestScore: Math.round(bestScore * 100) / 100,
          lastAttempt,
        };
      });

      // Trier par score moyen décroissant, puis par nombre de tentatives
      const sorted = userStats
        .filter((user) => user.totalAttempts > 0)
        .sort((a, b) => {
          if (b.averageScore === a.averageScore) {
            return b.totalAttempts - a.totalAttempts;
          }
          return b.averageScore - a.averageScore;
        })
        .slice(0, limit);
      this.logger.log(
        `Classement général calculé (${sorted.length} résultats)`,
      );
      return sorted;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération du classement général : ${error}`,
      );
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Erreur lors de la récupération du classement général',
        );
      }
      throw new InternalServerErrorException(
        'Erreur interne lors de la récupération du classement général',
      );
    }
  }

  /**
   * Récupérer le classement par matière
   */
  async getLeaderboardBySubject(
    subjectId: number,
    limit: number = 10,
  ): Promise<UserStats[]> {
    this.logger.log(
      `Récupération du classement pour la matière id=${subjectId} (limit=${limit})`,
    );
    try {
      const leaderboard = await this.prisma.user.findMany({
        select: {
          user_id: true,
          name: true,
          email: true,
          quizAttempts: {
            where: {
              status: 'COMPLETED',
              score: { not: null },
              total_questions: { not: null },
              quiz: {
                subject_id: subjectId,
              },
            },
            select: {
              score: true,
              total_questions: true,
              completed_at: true,
              quiz: {
                select: {
                  title: true,
                },
              },
            },
            orderBy: {
              completed_at: 'desc',
            },
          },
        },
      });

      // Même logique de calcul que pour le classement général
      const userStats: UserStats[] = leaderboard
        .map((user) => {
          const completedAttempts = user.quizAttempts.filter(
            (attempt) =>
              attempt.score !== null && attempt.total_questions !== null,
          );
          const totalAttempts = completedAttempts.length;

          if (totalAttempts === 0) {
            return null;
          }

          const totalPoints = completedAttempts.reduce((sum, attempt) => {
            const percentage =
              (attempt.score! / attempt.total_questions!) * 100;
            return sum + percentage;
          }, 0);

          const averageScore = totalPoints / totalAttempts;
          const bestScore = Math.max(
            ...completedAttempts.map(
              (attempt) => (attempt.score! / attempt.total_questions!) * 100,
            ),
          );

          return {
            user_id: user.user_id,
            name: user.name,
            email: user.email,
            totalAttempts,
            averageScore: Math.round(averageScore * 100) / 100,
            totalPoints: Math.round(totalPoints),
            bestScore: Math.round(bestScore * 100) / 100,
            lastAttempt: completedAttempts[0]?.completed_at || null,
          };
        })
        .filter((stats): stats is UserStats => stats !== null);

      const sorted = userStats
        .sort((a, b) => {
          if (b.averageScore === a.averageScore) {
            return b.totalAttempts - a.totalAttempts;
          }
          return b.averageScore - a.averageScore;
        })
        .slice(0, limit);
      this.logger.log(
        `Classement matière id=${subjectId} calculé (${sorted.length} résultats)`,
      );
      return sorted;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération du classement matière id=${subjectId} : ${error}`,
      );
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Erreur lors de la récupération du classement par matière',
        );
      }
      throw new InternalServerErrorException(
        'Erreur interne lors de la récupération du classement par matière',
      );
    }
  }

  /**
   * Récupérer les statistiques d'un utilisateur spécifique
   */
  async getUserStats(userId: number) {
    this.logger.log(
      `Récupération des statistiques pour l'utilisateur id=${userId}`,
    );
    try {
      const user = await this.prisma.user.findUnique({
        where: { user_id: userId },
        select: {
          user_id: true,
          name: true,
          email: true,
          quizAttempts: {
            where: {
              status: 'COMPLETED',
              score: { not: null },
              total_questions: { not: null },
            },
            select: {
              qa_id: true,
              score: true,
              total_questions: true,
              time_spent: true,
              started_at: true,
              completed_at: true,
              quiz: {
                select: {
                  quiz_id: true,
                  title: true,
                  subject: {
                    select: {
                      name: true,
                    },
                  },
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
            orderBy: {
              completed_at: 'desc',
            },
          },
        },
      });

      if (!user) {
        this.logger.warn(`Aucun utilisateur trouvé avec l'id=${userId}`);
        throw new NotFoundException('Aucun utilisateur trouvé avec cet ID');
      }

      const validAttempts = user.quizAttempts.filter(
        (attempt) => attempt.score !== null && attempt.total_questions !== null,
      );

      const attempts = validAttempts.map((attempt) => ({
        ...attempt,
        percentage:
          Math.round((attempt.score! / attempt.total_questions!) * 100 * 100) /
          100,
      }));

      const totalAttempts = attempts.length;
      const averageScore =
        totalAttempts > 0
          ? attempts.reduce((sum, attempt) => sum + attempt.percentage, 0) /
            totalAttempts
          : 0;
      const bestScore =
        totalAttempts > 0
          ? Math.max(...attempts.map((attempt) => attempt.percentage))
          : 0;

      this.logger.log(
        `Statistiques utilisateur id=${userId} calculées (tentatives=${totalAttempts})`,
      );
      return {
        user: {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
        },
        totalAttempts,
        averageScore: Math.round(averageScore * 100) / 100,
        bestScore,
        recentAttempts: attempts.slice(0, 10),
      };
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des stats utilisateur id=${userId} : ${error}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Erreur lors de la récupération des statistiques utilisateur',
        );
      }
      throw new InternalServerErrorException(
        'Erreur interne lors de la récupération des statistiques utilisateur',
      );
    }
  }

  /**
   * Récupérer les meilleurs scores récents (dernières 24h, 7 jours, etc.)
   */
  async getRecentBestScores(periodDays: number = 7, limit: number = 10) {
    this.logger.log(
      `Récupération des meilleurs scores récents (période=${periodDays}j, limit=${limit})`,
    );
    try {
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - periodDays);

      const recentAttempts = await this.prisma.quizAttempt.findMany({
        where: {
          status: 'COMPLETED',
          completed_at: {
            gte: dateFrom,
          },
          score: { not: null },
          total_questions: { not: null },
        },
        select: {
          qa_id: true,
          score: true,
          total_questions: true,
          completed_at: true,
          time_spent: true,
          user: {
            select: {
              user_id: true,
              name: true,
              email: true,
            },
          },
          quiz: {
            select: {
              title: true,
              subject: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        orderBy: [
          {
            score: 'desc',
          },
          {
            completed_at: 'desc',
          },
        ],
      });

      const results = recentAttempts
        .filter(
          (attempt) =>
            attempt.score !== null && attempt.total_questions !== null,
        )
        .map((attempt) => ({
          ...attempt,
          percentage:
            Math.round(
              (attempt.score! / attempt.total_questions!) * 100 * 100,
            ) / 100,
        }))
        .slice(0, limit);
      this.logger.log(
        `Meilleurs scores récents récupérés (${results.length} résultats)`,
      );
      return results;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des meilleurs scores récents : ${error}`,
      );
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'Erreur lors de la récupération des meilleurs scores récents',
        );
      }
      throw new InternalServerErrorException(
        'Erreur interne lors de la récupération des meilleurs scores récents',
      );
    }
  }
}
