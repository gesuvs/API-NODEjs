"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maquinaController_1 = __importDefault(require("../../controllers/controllersProjeto/maquinaController"));
class MaquinaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', maquinaController_1.default.create);
        this.router.get('/', maquinaController_1.default.all);
        this.router.get('/:id', maquinaController_1.default.list);
        this.router.get('/:id/seven/:id', maquinaController_1.default.getMaquinaId);
        // this.router.post('/', usuarioController.create);
        // this.router.put('/:id', usuarioController.update);
        // this.router.delete('/:id', usuarioController.delete);
    }
}
const maquinaRoutes = new MaquinaRoutes();
exports.default = maquinaRoutes.router;
