import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InternalServerErrorResponse } from './api-message/entities/error.entity';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: "Message de bienvenue ou d'état de l'API" })
  @ApiResponse({
    status: 200,
    description: 'API opérationnelle',
    schema: { example: 'Hello World!' },
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
