"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BusinessController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.request().query(`select * from business`).then(resultado => {
                res.json(resultado.recordset);
            });
            // const users = await pool.request().query(`select * from users`)
            //     res.json(users);
        });
    }
    ;
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userId = yield database_1.default.request().query(`select * from business where USERID = ${id}`)
                .then(resultado => {
                res.json(resultado.recordset);
                res.status(404).json({
                    text: "Usuario nao encontrado"
                });
                console.log(resultado.recordset);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await pool.query`insert into users set ?`, [req.body];
            // res.json({
            //     message: 'Usuario Criado'
            // });
            // await pool.query`insert into users set ?`, [req.body];
            //         res.json({
            //             text: 'Usuario Criado'
            //         });
            yield database_1.default.query `insert into business values ('testetres', '123','fist1', 'last')`
                .then(resultado => {
                res.json({
                    text: "Usuario inserido com sucesso"
                });
                // res.json(resultado.recordset);
            });
            // let stringQuery = "insert into users values ('testedois', '123','fist1', 'last')";
            // pool.request().query(stringQuery).then(results =>{
            //     res.json(results.recordset);
            // })
            // sql.query('insert into users set ?', [req.body]);
            //console.log(req.body);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req.body;
            const userUpdate = yield database_1.default.request().query(`update business set ${body} where USERID = ${id}`)
                .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
                // res.json(resultado.recordset);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userDel = yield database_1.default.request().query(`delete from business where USERID = ${id}`)
                .then(resultado => {
                res.json({
                    text: "Usuario deletado com sucesso"
                });
                // res.json(resultado.recordset);
            });
        });
    }
}
const businessController = new BusinessController();
exports.default = businessController;
