import { Request, Response } from 'express';
import pool from '../database';


class AuthController {
    
    public async getLogin(req: Request, res: Response): Promise<void> {

        const username = req.body.username;
        const password = req.body.password;

        await pool.query`select * from users where username = ${username} and password = ${password}`.then(resultado => {
            res.json(resultado.recordset[0])
            console.log(resultado.recordset[0])
            // res.json(resultado.recordset[0])
        });
    }
}

const authController = new AuthController();
export default authController;