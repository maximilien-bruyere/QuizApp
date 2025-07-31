import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { NotFoundException } from '@nestjs/common';

describe('CategoryService', () => {
  let service: CategoryService;
  let prisma: any;

  beforeEach(async () => {
    prisma = {
      category: {
        findUnique: jest.fn(),
        delete: jest.fn(),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        { provide: 'PrismaService', useValue: prisma },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    // @ts-ignore
    service.prisma = prisma;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('devrait lever NotFoundException si on supprime une catégorie inexistante', async () => {
    prisma.category.findUnique.mockResolvedValue(null);
    await expect(service.delete(999)).rejects.toThrow(NotFoundException);
  });
});
