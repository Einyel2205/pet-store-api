//importamos las librerias 
import 'dotenv/config';
import { get } from 'env-var';

//? Creamos nuestro enum que manejará nuestra envs

export const envs = {

    PORT: get("PORT").required().asPortNumber(),

    MONGO_URL: get("MONGO_URL").required().asString(),
    MONGO_DB_NAME: get("MONGO_DB_NAME").required().asString(),
};