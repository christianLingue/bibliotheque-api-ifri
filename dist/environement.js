"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseURL = void 0;
const config_1 = require("@nestjs/config");
config_1.ConfigModule.forRoot();
const config = {
    mode: 'prod',
};
let devDatabaseURL = 'mongodb://localhost:27017/bibliotheque-api';
let prodDatabaseURL = process.env.DATABASE_CONNECTION;
let databaseURL = config.mode == 'dev' ? devDatabaseURL : prodDatabaseURL;
exports.databaseURL = databaseURL;
//# sourceMappingURL=environement.js.map