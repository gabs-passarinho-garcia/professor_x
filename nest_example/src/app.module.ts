import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvengersModule } from './avengers/avengers.module';

@Module({
  imports: [AvengersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
