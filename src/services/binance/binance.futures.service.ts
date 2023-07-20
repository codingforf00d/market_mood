import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {LongShortResponse, TimeInterval, Symbol} from './binance.types';

// https://binance-docs.github.io/apidocs/futures/en/

@Injectable()
export class BinanceService {
  private api_key = process.env.BINANCE_API_KEY;
  private api_url = 'https://fapi.binance.com';

  async topLongShortPositionRatio(period: TimeInterval, pair: Symbol): Promise<LongShortResponse> {
    return axios.get(this.api_url+'/futures/data/topLongShortPositionRatio', {
        params: {
            pair,
            period
        },
        headers: {
            Accept: 'application/json',
            "X-MBX-APIKEY": this.api_key
        }
    }).then(data => data.data);
  }

  async topLongShortAccountRatio(period: TimeInterval, pair: Symbol): Promise<LongShortResponse> {
    return axios.get(this.api_url+'/futures/data/topLongShortAccountRatio', {
        params: {
            pair,
            period
        },
        headers: {
            Accept: 'application/json',
            "X-MBX-APIKEY": this.api_key
        }
    }).then(data => data.data);
  }

  async globalLongShortAccountRatio(period: TimeInterval, pair: Symbol): Promise<LongShortResponse> {
    return axios.get(this.api_url+'/futures/data/globalLongShortAccountRatio', {
        params: {
            pair,
            period
        },
        headers: {
            Accept: 'application/json',
            "X-MBX-APIKEY": this.api_key
        }
    }).then(data => data.data);
  }
}
