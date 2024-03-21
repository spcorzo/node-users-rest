import { envs } from "./config";
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  // DB initialization
  // Start server
  new Server({
    port: envs.PORT,
  }).start();
}
