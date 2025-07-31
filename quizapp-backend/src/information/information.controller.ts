import { Controller, Get } from '@nestjs/common';
import { InformationService } from './information.service';

@Controller('info')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Get()
  async getInfo() {
    return await this.informationService.getInfoCounts();
  }
}
