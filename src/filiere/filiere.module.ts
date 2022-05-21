import { Module } from '@nestjs/common';
import { FiliereService } from './filiere.service';
import { FiliereController } from './filiere.controller';
import { Filiere, FiliereSchema } from './filiere.dto';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FiliereController],
  providers: [FiliereService],
  imports: [
    MongooseModule.forFeature([{name: Filiere.name, schema: FiliereSchema}])
  ]
})
export class FiliereModule {}
