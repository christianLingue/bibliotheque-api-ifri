import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Matiere } from './matiere.dto';
import { MatiereService } from './matiere.service';

@ApiTags('Matiere')
@Controller('matieres')
export class MatiereController {
  constructor(private readonly matiereService: MatiereService) {}

  @Post()
  create(@Body() matiere: Matiere) {
    return this.matiereService.create(matiere);
  }

  @Get()
  @ApiQuery({type: Matiere})
  findAll(@Query() query: any) {
    return this.matiereService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matiereService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedMatiere: Matiere) {
    return this.matiereService.update(id, updatedMatiere);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matiereService.remove(id);
  }
  
}
