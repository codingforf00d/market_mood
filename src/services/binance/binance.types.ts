
export type LongShortResponse = Array<{
    symbol: Symbol,
    longAccount: string, // float
    shortAccount: string, // float
    longShortRatio: string, // float
    timestamp: string // biging
}>;

export type TimeInterval = "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d";

export type Symbol = 'BTCUSDT';