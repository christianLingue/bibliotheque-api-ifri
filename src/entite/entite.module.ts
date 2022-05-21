import { Module } from '@nestjs/common';
import { EntiteService } from './entite.service';
import { EntiteController } from './entite.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Entite, EntiteSchema } from './entite.dto';

@Module({
  controllers: [EntiteController],
  providers: [EntiteService],
  imports: [
    MongooseModule.forFeature([{name: Entite.name, schema: EntiteSchema}])
  ]
})
export class EntiteModule {}
