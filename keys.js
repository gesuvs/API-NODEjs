"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    server: 'serversoft7.database.windows.net',
    user: 'ninja',
    password: 'x=Rw4=P_',
    database: 'SevenSoft',
    pool: {
        max: 10,
        min: 2,
        idleTimeoutMillis: 30000
    },
    options: {
        database: 'SevenSoft',
        encrypt: true,
    }
};
// const config = {
//     server: 'gameoverserve.database.windows.net',
//     user: 'adminGO',
//     password: 'GameOver0',
//     database: 'DataBaseGO',
//     options:
//     {
//         database: 'DataBaseGO', //update me
//         encrypt: true
//     }
// };
exports.default = config;
