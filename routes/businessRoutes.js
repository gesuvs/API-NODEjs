"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessController_1 = __importDefault(require("../controllers/businessController"));
class BusinessRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', businessController_1.default.list);
        this.router.get('/:id', businessController_1.default.getUserId);
        this.router.post('/', businessController_1.default.create);
        this.router.put('/:id', businessController_1.default.update);
        this.router.delete('/:id', businessController_1.default.delete);
    }
}
const businessRoutes = new BusinessRoutes();
exports.default = businessRoutes.router;
