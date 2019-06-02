"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventoController_1 = __importDefault(require("../../controllers/controllersProjeto/eventoController"));
class EventoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/:id', loginController.getLogin);
        this.router.get('/:id', eventoController_1.default.getAllEventoById);
        this.router.post('/', eventoController_1.default.create);
        // this.router.get('/:id/eventobyid/:id', eventoController.getEventoById);
    }
}
const loginRoutes = new EventoRoutes();
exports.default = loginRoutes.router;
