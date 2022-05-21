import { ApiBody, ApiConsumes, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UseInterceptors,UploadedFile, UseGuards, SetMetadata } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EpreuveService } from './epreuve.service';
import { Epreuve } from './epreuve.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { RolesGuard } from 'src/middleware/roles.guard';
import { Roles } from 'src/middleware/roles.decorator';


@ApiTags('Epreuve')
@Controller('epreuves')
export class EpreuveController {
  constructor(private readonly epreuveService: EpreuveService) {}

  // @Post() 
  // create(@Body() epreuve: Epreuve) {
  //   return this.epreuveService.create(epreuve);
  // }
  @Post()
  // @Roles('admin')
  
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() epreuve: Epreuve, @UploadedFile() file: Express.Multer.File) {
    console.log({
      file: file,
    });
    return this.epreuveService.create(epreuve);
  }

  @Get()
  @ApiQuery({type: Epreuve})
  findAll(@Query() query: any) {
    return this.epreuveService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epreuveService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedEpreuve: Epreuve) {
    return this.epreuveService.update(id, updatedEpreuve);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.epreuveService.remove(id);
  }
  
@Post('testupload')
@ApiConsumes('multipart/form-data')
@ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
@UseInterceptors(FileInterceptor('file'))
uploadSomething( @UploadedFile() file) {
  console.log(file);
}
}

