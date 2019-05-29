"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/:id', loginController.getLogin);
        this.router.post('/', loginController_1.default.getLogin);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
