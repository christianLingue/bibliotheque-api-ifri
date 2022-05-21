import { Controller, Get } from "@nestjs/common";

@Controller('/')
export class AppController {
  
  @Get('')
  findAll() {
    return 'The URL doesn\'t match any router'
  }
}
