import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FiliereService } from './filiere.service';
import { Filiere } from './filiere.dto';

@ApiTags('Filiere')
@Controller('filieres')
export class FiliereController {
  constructor(private readonly filiereService: FiliereService) {}

  @Post()
  create(@Body() filiere: Filiere) {
    return this.filiereService.create(filiere);
  }

  @Get()
  @ApiQuery({type: Filiere})
  findAll(@Query() query: any) {
    return this.filiereService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filiereService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedFiliere: Filiere) {
    return this.filiereService.update(id, updatedFiliere);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filiereService.remove(id);
  }
  
}
