import { Test, TestingModule } from '@nestjs/testing';
import { LeaderboardService } from './leaderboard.service';
import { NotFoundException } from '@nestjs/common';

describe('LeaderboardService', () => {
  let service: LeaderboardService;
  let prisma: any;

  beforeEach(async () => {
    prisma = {
      user: {
        findUnique: jest.fn(),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LeaderboardService,
        { provide: 'PrismaService', useValue: prisma },
      ],
    }).compile();

    service = module.get<LeaderboardService>(LeaderboardService);
    // @ts-ignore
    service.prisma = prisma;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("devrait lever NotFoundException si on demande les stats d'un utilisateur inexistant", async () => {
    prisma.user.findUnique.mockResolvedValue(null);
    await expect(service.getUserStats(999)).rejects.toThrow(NotFoundException);
  });
});
