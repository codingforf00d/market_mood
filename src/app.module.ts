import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BinanceService } from './services/binance/binance.futures.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BinanceService],
})
export class AppModule {}
