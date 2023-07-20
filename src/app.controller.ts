import { Controller, Get, Req } from '@nestjs/common';
import { BinanceService } from './services/binance/binance.futures.service';
import { LongShortResponse } from './services/binance';

@Controller()
export class AppController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('longShortRatio')
  getLongShortRatio(): Promise<LongShortResponse> {
    return this.binanceService.globalLongShortAccountRatio('4h', 'BTCUSDT');
  }
}
