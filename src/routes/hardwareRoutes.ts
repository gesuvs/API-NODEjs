import { Router } from 'express';
import hardwareController from '../controllers/hardwareController';


class HardwareRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/', hardwareController.list);
        this.router.get('/:id', hardwareController.getUserId);
    }
}

const hardwareRoutes = new HardwareRoutes();
export default hardwareRoutes.router;