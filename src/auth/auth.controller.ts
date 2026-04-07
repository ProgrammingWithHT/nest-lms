import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

// @Controller({host: ':admin.example.com'})
@Controller('auth') //using auth here when we create api then all api of this page start with /auth
export class AuthController {

    constructor(private readonly authServices: AuthService){};
    
    @Post('register')  //call this api like /auth/register
    async registerAuth(@Body() registerUserDto: RegisterDto) {
        // console.log(registerUserDto.fname)

        const createdUser = await this.authServices.registerUser(registerUserDto);
        return createdUser;
        // return 'This action adds a new cat';
    }
  
}
