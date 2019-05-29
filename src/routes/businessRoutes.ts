import { Router } from 'express';
import businessController from '../controllers/businessController';


class BusinessRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        this.router.get('/', businessController.list);
        this.router.get('/:id', businessController.getUserId);
        this.router.post('/', businessController.create);
        this.router.put('/:id', businessController.update);
        this.router.delete('/:id', businessController.delete);
    }

}

const businessRoutes = new BusinessRoutes();
export default businessRoutes.router;