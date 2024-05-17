import { envs } from "./config/config-barril";
import { Server } from "./presentation/server";


(()=>{
    main();
})()

async function main() {
    //* todo: await de base de datos

    //* todo: inicio de nuestro server
    new Server({
        port: envs.PORT,
    }).start();
}