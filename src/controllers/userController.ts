import { Request, Response } from 'express';
import pool from '../database';

class UserController {

    public async list(req: Request, res: Response) {
        await pool.query`select * from users`.then(resultado => {
            if (resultado.recordset.length > 0) {
                res.json(resultado.recordset);
            } else {
                res.status(404).json({
                    text: "Nenhum usuario encontrado"
                })
            }
        })
    };

    public async getUserId(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query`select * from users where userId = ${id}`.then(resultado => {
            if (resultado.recordset.length > 0) {
                return res.json(resultado.recordset[0]);
            } else {
                res.status(404).json({
                    text: "Usuario nao encontrado"
                })
            }
        })
    }

    public async create(req: Request, res: Response): Promise<void> {
        const { username } = req.body;
        const { password } = req.body;
        const { firstName } = req.body;
        const { lastName } = req.body;

        await pool.query`insert into [users](username, password,firstName,lastName) values (${username}, ${password},${firstName}, ${lastName})`;
        res.json({
            text: 'Usuario Criado'
        });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { username } = req.body;
        const { password } = req.body;
        const { firstName } = req.body;
        const { lastName } = req.body;

        await pool.query`update [users] set username = ${username}, password = ${password}, firstName = ${firstName}, lastName = ${lastName} where userId = ${id}`
            .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
            })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.request().query(`delete from users where userId = ${id}`);
        res.json({
            text: "Usuario deletado com sucesso"
        })

    }
}

const userController = new UserController();
export default userController;