import { Router } from 'express';
import graficoController from '../controllers/graficoController';


class GraficoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }
    
    config(): void {
        this.router.get('/', graficoController.list);
        this.router.get('/:id', graficoController.getUserId);
    }

}

const graficoRoutes = new GraficoRoutes();
export default graficoRoutes.router;