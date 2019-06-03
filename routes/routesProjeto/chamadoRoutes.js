"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chamadosController_1 = __importDefault(require("../../controllers/controllersProjeto/chamadosController"));
class ChamadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/:id', loginController.getLogin);
        this.router.get('/:id', chamadosController_1.default.list);
        this.router.get('/:id/total/:id', chamadosController_1.default.totalRows);
        this.router.post('/', chamadosController_1.default.create);
        // this.router.get('/:id/eventobyid/:id', eventoController.getEventoById);
    }
}
const chamadosRoutes = new ChamadosRoutes();
exports.default = chamadosRoutes.router;
