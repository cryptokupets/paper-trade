import { parentPort, workerData } from "worker_threads";
import { streamTrades } from "./streamTrades";

const { options } = workerData;
const rs = streamTrades(options);

rs.on("data", chunk => {
  const trade = JSON.parse(chunk);
  parentPort.postMessage(trade);
});
// https://github.com/TulipCharts/tulipnode/compare/master...jeremyjs:feature/support-worker-threads