import { Router } from 'express';
import usuarioController from '../../controllers/controllersProjeto/usuarioController';


class UsuarioRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usuarioController.list);
        this.router.get('/:id', usuarioController.getUserId);
        this.router.post('/', usuarioController.create);
        this.router.put('/:id', usuarioController.update);
        this.router.delete('/:id', usuarioController.delete);
    }

}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;