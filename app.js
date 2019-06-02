"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import userRoutes from './routes/userRoutes';
// import middleware from './middleware';
// import authRoutes from './routes/authRoutes';
// import businessRoutes from './routes/businessRoutes';
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/routesProjeto/loginRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/routesProjeto/usuarioRoutes"));
const graficoRoutes_1 = __importDefault(require("./routes/graficoRoutes"));
const hardwareRoutes_1 = __importDefault(require("./routes/routesProjeto/hardwareRoutes"));
const maquinaRoutes_1 = __importDefault(require("./routes/routesProjeto/maquinaRoutes"));
const eventoRoutes_1 = __importDefault(require("./routes/routesProjeto/eventoRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        // this.error();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use((express_1.default.json()));
        this.app.use(express_1.default.urlencoded({
            extended: false
        }));
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
            next();
        });
    }
    ;
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/usuario', usuarioRoutes_1.default);
        this.app.use('/api/grafico', graficoRoutes_1.default);
        this.app.use('/api/hardware', hardwareRoutes_1.default);
        this.app.use('/api/maquina', maquinaRoutes_1.default);
        this.app.use('/api/evento', eventoRoutes_1.default);
        // this.app.use('/api/business', businessRoutes);
        // this.app.use('/api/user', userRoutes);
        // this.app.use('/api/login', authRoutes);
    }
    // error() {
    //     this.app.use((err:Er, req: Request, res: Response, next: NextFunction) => {
    //         res.status(500).send('Error');
    //     })
    // }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port `, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
