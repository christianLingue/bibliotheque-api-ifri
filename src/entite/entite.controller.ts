import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Entite } from './entite.dto';
import { EntiteService } from './entite.service';


@ApiTags('Entite')
@Controller('entities')
export class EntiteController {
  constructor(private readonly entiteService: EntiteService) {}

  @Post()
  @ApiBody({type: Entite})
  create(@Body() entite: Entite) {
    return this.entiteService.create(entite);
  }

  @Get()
  @ApiQuery({type: Entite})
  findAll(@Query() query: any) {
    return this.entiteService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entiteService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEntite: Entite) {
    return this.entiteService.update(id, updateEntite);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entiteService.remove(id);
  }
  
}
