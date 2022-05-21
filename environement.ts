import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

const config = {
    mode: 'prod',
}

let devDatabaseURL = 'mongodb://localhost:27017/bibliotheque-api';
let prodDatabaseURL = process.env.DATABASE_CONNECTION;

let databaseURL = config.mode == 'dev' ? devDatabaseURL : prodDatabaseURL;

export {
    databaseURL
}