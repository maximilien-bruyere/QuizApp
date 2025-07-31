import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

/**
 * Service Auth – Gère la logique métier de l'authentification et de l'autorisation.
 *
 * Ce service permet l'inscription, la connexion, la génération et la validation des tokens JWT,
 * ainsi que la gestion des erreurs liées à l'authentification.
 */
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: {
    email: string;
    password: string;
    name: string;
    role?: 'USER' | 'ADMIN';
  }) {
    const existing = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new ConflictException('Adresse email déjà utilisée');
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password: hashedPassword,
          role: data.role ?? 'USER',
        },
      });
      return this.jwt(user);
    } catch (err) {
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async login(data: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Email ou mot de passe invalide');
    }
    return this.jwt(user);
  }

  private jwt(user: any) {
    const payload = {
      sub: user.user_id,
      email: user.email,
      role: user.role,
      name: user.name,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
