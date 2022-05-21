import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { ApiBody, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { Roles } from "src/middleware/roles.decorator";
import { User } from "./user.dto";
import { UserService } from "./user.service";

@ApiTags('Utilisateur')
@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    @ApiBody({type: User})
    async createUser(@Body() user:User) {
        return this.userService.create(user);
        // return response.status(HttpStatus.CREATED).json({message: 'Utilisateur cree avec success'
        // });
    }

    @Get()
    @ApiQuery({type: User})
    async getAll(@Query() query: any){
        return await this.userService.all(query);
    }

    @Get(':id')
    async getOne(@Param('id') id:string){
        return await this.userService.one(id);
    }
    
    @ApiParam({
        name: 'id',
        required: true,
        description: 'Should be an id of a user that exists in the database',
        type: String
    })
    @Put(':id')
    async updateUser(@Body() user:User,@Res() response: Response, @Param() id: string) {
        await this.userService.update(id,user);
        return response.status(HttpStatus.CREATED).json({
            message: 'Utilisateur modifie avec success',
    });
    }

    @Delete(':id')
    archiveUser(@Res() response,@Param('id') id: string){
      this.userService.delete(id);
      return response.status(HttpStatus.CREATED).json({message: 'Utilisateur supprime avec success' });
    }

   
    async find() {

    }

    @Post('test')
    @Roles('admin')
    async testGuardForMe() {
        console.log('into')
        return 'success';
    }
}