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
class EventoController {
    getAllEventoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            // const teste = "<p>dois</p>"
            yield database_1.default.query `select * from evento where fk_idUserSeven = ${id}`.then(resultado => {
                // res.send(teste)
                res.json(resultado);
                console.log(resultado.recordset[0]);
                // res.json(resultado.recordset[0])
            });
        });
    }
    getEventoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            // const teste = "<p>dois</p>"
            yield database_1.default.query `select * from evento, userSeven where id_evento = ${id}`.then(resultado => {
                // res.send(teste)
                return res.json(resultado.recordset[0]);
                // console.log(resultado.recordset[0])
                // res.json(resultado.recordset[0])
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nomeEvento = req.body.nomeEvento;
            const tipoEvento = req.body.tipoEvento;
            const data = req.body.data;
            const hora = req.body.hora;
            const fk_idUserSeven = req.body.fk_idUserSeven;
            yield database_1.default.query `insert into [evento](nomeEvento,tipoEvento,DATA,HORA,fk_idUserSeven) values (${nomeEvento},${tipoEvento},(select convert(date,${data},103)),${hora},${fk_idUserSeven})`.then(resultado => {
                res.json({
                    text: 'Evento Cadastrada'
                });
            }).catch(err => res.status(500).send(err));
        });
    }
}
const eventoController = new EventoController();
exports.default = eventoController;
