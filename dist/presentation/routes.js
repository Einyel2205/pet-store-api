"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express"); // 2
const router_1 = require("./auth/router"); //6
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)(); //4
        // Definir todas mis rutas principales
        router.use('/api/auth', router_1.AuthRoutes.routes); // 7
        return router; //5
    }
}
exports.AppRoutes = AppRoutes;
