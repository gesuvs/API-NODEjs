"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hardwareController_1 = __importDefault(require("../controllers/hardwareController"));
class HardwareRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', hardwareController_1.default.list);
        this.router.get('/:id', hardwareController_1.default.getUserId);
    }
}
const hardwareRoutes = new HardwareRoutes();
exports.default = hardwareRoutes.router;
