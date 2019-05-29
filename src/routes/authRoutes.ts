import { Router } from 'express';
import authController from '../controllers/authController';


class AuthRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        // this.router.get('/:id', loginController.getLogin);
        this.router.post('/', authController.getLogin);
    }

}

const authRoutes = new AuthRoutes();
export default authRoutes.router;