import { AuthModule } from './../auth/auth.module';
import { EntiteModule } from './../entite/entite.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { FiliereModule } from 'src/filiere/filiere.module';
import { MatiereModule } from 'src/matiere/matiere.module';
import { EpreuveModule } from 'src/epreuve/epreuve.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import {databaseURL} from '../../environement';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    EntiteModule,
    FiliereModule,
    MatiereModule,
    EpreuveModule,
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseURL),
  ],

})
export class AppModule {}
