"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
//importamos las librerias 
require("dotenv/config");
const env_var_1 = require("env-var");
//? Creamos nuestro enum que manejará nuestra envs
exports.envs = {
    PORT: (0, env_var_1.get)("PORT").required().asPortNumber(),
    MONGO_URL: (0, env_var_1.get)("MONGO_URL").required().asString(),
    MONGO_DB_NAME: (0, env_var_1.get)("MONGO_DB_NAME").required().asString(),
};
