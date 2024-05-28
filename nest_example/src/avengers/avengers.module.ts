import { Module } from '@nestjs/common';
import { AvengersController } from './avengers.controller';
import { GetAvengerService } from './services/get-avenger.service';

@Module({
  providers: [GetAvengerService],
  exports: [GetAvengerService],
  controllers: [AvengersController],
  imports: [],
})
export class AvengersModule {}
