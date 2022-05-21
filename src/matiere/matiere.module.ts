import { Module } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { MatiereController } from './matiere.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Matiere, MatiereSchema } from './matiere.dto';

@Module({
  controllers: [MatiereController],
  providers: [MatiereService],
  imports: [
    MongooseModule.forFeature([{name: Matiere.name, schema: MatiereSchema}])
  ]
})
export class MatiereModule {}
