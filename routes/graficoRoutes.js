"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const graficoController_1 = __importDefault(require("../controllers/graficoController"));
class GraficoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', graficoController_1.default.list);
        this.router.get('/:id', graficoController_1.default.getUserId);
    }
}
const graficoRoutes = new GraficoRoutes();
exports.default = graficoRoutes.router;
