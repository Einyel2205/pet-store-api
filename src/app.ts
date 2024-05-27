import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes"; //1
import { Server } from "./presentation/server";

(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
      new Server({
        port: envs.PORT,
        routes: AppRoutes.routes //2
      }).start();
  }