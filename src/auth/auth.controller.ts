import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { _User } from './_user.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: _User) {
    const { username, password } = user;
    return {
      statusCode: 201,
      message: 'Login successfully',
      data: await this.authService.validateUser(username, password),
    };
  }
}
