import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(registerUserDto: RegisterDto) {
        try {
            return await this.userModel.create(registerUserDto);
        } catch (err) {
            console.log(err);
            const e = err as {code?: number};
            if (e.code === 11000) {
                throw new Error('Email already exists'); // better: ConflictException
            }
            throw err;
        }
        return await this.userModel.create({
            fname: registerUserDto.fname,
            lname: registerUserDto.lname,
            email: registerUserDto.email,
            password: registerUserDto.password,
        })
    }

    // createUser1(registerUserDto: RegisterDto){
    //     return {message: "user created"}
    // }
}
