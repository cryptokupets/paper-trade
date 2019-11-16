import { streamAdvice } from "get-advice";
import { Readable } from "stream";
import { streamAdviceToTrade } from "./streamAdviceToTrade";

export function streamTrades({
  exchange,
  currency,
  asset,
  period,
  start,
  indicators,
  code,
  initialBalance
}: {
  exchange: string;
  currency: string;
  asset: string;
  period: string;
  start: string;
  indicators: string;
  code: string;
  initialBalance: number;
}): Readable {
  const rs = streamAdvice({
    exchange,
    currency,
    asset,
    period,
    start,
    indicators,
    code
  });

  const ts = streamAdviceToTrade({
    exchange,
    currency,
    asset,
    initialBalance
  });
  rs.pipe(ts);
  return ts;
}
