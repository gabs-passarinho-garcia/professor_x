import { Controller, Query, Get } from '@nestjs/common';
import { GetAvengerByNameDto } from './dto/avenger.dto';
import { GetAvengerService } from './services/get-avenger.service';

@Controller()
export class AvengersController {
  constructor(private readonly getAvengerService: GetAvengerService) {}

  @Get('avengers/get-by-name')
  public getByName(@Query() data: GetAvengerByNameDto) {
    return this.getAvengerService.getAvengerByName(data);
  }
}
