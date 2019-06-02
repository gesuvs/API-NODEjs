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
const database_1 = __importDefault(require("../../database"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query `select * from userSeven`.then(resultado => {
                if (resultado.recordset.length > 0) {
                    res.json(resultado.recordset);
                }
                else {
                    res.status(404).json({
                        text: "Nenhum usuario encontrado"
                    });
                }
            }).catch(err => res.status(500).send(err));
        });
    }
    ;
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { id } = req.params;
            const id = req.params.id;
            yield database_1.default.query `select * from userSeven where id_usuario = ${id}`.then(resultado => {
                if (resultado.recordset[0]) {
                    console.log(resultado.recordset);
                    return res.json(resultado.recordset[0]);
                }
                else {
                    res.status(404).json({
                        text: "Usuario nao encontrado"
                    });
                }
            }).catch(err => res.status(500).send(err));
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const nome = req.body.nome;
            // const usuario = req.body.usuario;
            // const email = req.body.email;
            // const senha = req.body.senha;
            const { nome } = req.body;
            const { usuario } = req.body;
            const { email } = req.body;
            const { senha } = req.body;
            yield database_1.default.query `insert into [userSeven](nome, usuario,email,senha) values (${nome}, ${usuario},${email}, ${senha})`.then(resultado => {
                console.log(resultado.recordset);
                if (resultado.recordsets.length > 0) {
                    res.json({
                        text: 'Usuario Criado'
                    });
                }
                else {
                    res.json({
                        text: "Usuario ja existe"
                    });
                }
            }).catch(err => res.status(500).send(err));
            //.then(
            //     rows => {
            //         if(rows.recordset.columns){
            //             console.log(rows.rowsAffected)
            //         }
            //     }
            // )
            // res.json({
            //     text: 'Usuario Criado'
            // });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { username } = req.body;
            const { password } = req.body;
            const { firstName } = req.body;
            const { lastName } = req.body;
            yield database_1.default.query `update [userSeven] set username = ${username}, password = ${password}, firstName = ${firstName}, lastName = ${lastName} where userId = ${id}`
                .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
            }).catch(err => res.status(500).send(err));
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.request().query(`delete from users where userId = ${id}`);
            res.json({
                text: "Usuario deletado com sucesso"
            });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
