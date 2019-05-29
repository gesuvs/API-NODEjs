import { Request, Response } from 'express';
import pool from '../database';

class BusinessController {


    public async list(req: Request, res: Response) {
        const users = await pool.request().query(`select * from business`).then(resultado => {
            res.json(resultado.recordset);
        })
        // const users = await pool.request().query(`select * from users`)
        //     res.json(users);
    };

    public async getUserId(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const userId = await pool.request().query(`select * from business where USERID = ${id}`)
            .then(resultado => {
                res.json(resultado.recordset);
                res.status(404).json({
                    text: "Usuario nao encontrado"
                });
                console.log(resultado.recordset);
            })
    }

    public async create(req: Request, res: Response): Promise<void> {
        // await pool.query`insert into users set ?`, [req.body];
        // res.json({
        //     message: 'Usuario Criado'
        // });
        // await pool.query`insert into users set ?`, [req.body];
        //         res.json({
        //             text: 'Usuario Criado'
        //         });

        await pool.query`insert into business values ('testetres', '123','fist1', 'last')`
            .then(resultado => {
                res.json({
                    text: "Usuario inserido com sucesso"
                });
                // res.json(resultado.recordset);
            })
        // let stringQuery = "insert into users values ('testedois', '123','fist1', 'last')";
        // pool.request().query(stringQuery).then(results =>{
        //     res.json(results.recordset);
        // })

        // sql.query('insert into users set ?', [req.body]);
        //console.log(req.body);

    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { body } = req.body;
        const userUpdate = await pool.request().query(`update business set ${body} where USERID = ${id}`)
            .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
                // res.json(resultado.recordset);
            })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const userDel = await pool.request().query(`delete from business where USERID = ${id}`)
            .then(resultado => {
                res.json({
                    text: "Usuario deletado com sucesso"
                })
                // res.json(resultado.recordset);
            })
    }


}

const businessController = new BusinessController();
export default businessController;