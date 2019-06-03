"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const processoController_1 = __importDefault(require("../../controllers/controllersProjeto/processoController"));
class ProcessoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', processoController_1.default.list);
    }
}
const processoRoutes = new ProcessoRoutes();
exports.default = processoRoutes.router;
