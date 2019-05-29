import { Request, Response } from 'express';
import pool from '../database';

class GraficoController {

    public async list(req: Request, res: Response) {
        await pool.query`select top(1) * from desempenho order by idDesempenho desc`.then(resultado => {
            if (resultado.recordset.length > 0) {
                res.json(resultado);
                console.log(resultado.recordsets)
            } else {
                res.status(404).json({
                    text: "Nenhum registro encontrado"
                })
            }
        })
    };

    public async getUserId(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query`select * from desempenho where idDesempenho = ${id}`.then(resultado => {
            if (resultado.recordset.length > 0) {
                return res.json(resultado.recordset[0]);
            } else {
                res.status(404).json({
                    text: "Usuario nao encontrado"
                })
            }
        })
    }
}

const graficoController = new GraficoController();
export default graficoController;