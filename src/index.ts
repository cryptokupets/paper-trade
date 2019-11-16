import { Worker } from "worker_threads";
export * from "./streamAdviceToTrade";
export * from "./streamTrades";

export function workerTrades(options: any): Worker {
  const worker = new Worker("./lib/worker.js", {
    workerData: {
      options
    }
  });
  worker.on("message", e => console.log(e));
  return worker;
}
