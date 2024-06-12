import { envs } from "./config";
import { MongoDatabase } from "./data";
import { AppRoutes } from "./presentation/routes"; //1
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  // todo: await base de datos
  await MongoDatabase.connect({
    //1
    //3
    dbName: envs.MONGO_DB_NAME,    
    mongoUrl: envs.MONGO_URL,
  });
  

  // todo: inicio de nuestro server
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes, //2
  }).start();
}
