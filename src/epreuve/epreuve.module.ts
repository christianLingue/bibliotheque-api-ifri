import { Module } from '@nestjs/common';
import { EpreuveService } from './epreuve.service';
import { EpreuveController } from './epreuve.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Epreuve, EpreuveSchema } from './epreuve.dto';

@Module({
  controllers: [EpreuveController],
  providers: [EpreuveService],
  imports: [
    MongooseModule.forFeature([{name: Epreuve.name, schema: EpreuveSchema}])
  ]
})

export class EpreuveModule {}
