// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { AuthCredentialsDto } from '../dto/auth.credentials.dto';
// import * as bcrypt from 'bcrypt';
// import { JwtService } from '@nestjs/jwt';
// import { JwtPayload } from '../jwt-payload.interface';

// @Injectable()
// export class AuthService {
//     constructor (
//         @InjectRepository(UsersRepository)
//         private usersRepository: UsersRepository,
//         private jwtService:JwtService,  
//     ) {}

//     async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
//         return this.usersRepository.createUser(authCredentialsDto);
//     }

//     async signIn(authCredentialsDto: AuthCredentialsDto):
//      Promise<{ accessToken:string }> {
//         const { username, password } = authCredentialsDto;
//         const user = await this.usersRepository.findOne({ username });

//         if(user && (await bcrypt.compare(password, user.password))) {  
//             const payload: JwtPayload = { username };
//             const accessToken: string = await this.jwtService.sign(payload);
//             return { accessToken };
//         } else {
//             throw new UnauthorizedException('Please check your login credentials'); 
//         }
//     }
// }

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, of } from 'rxjs';
import { User } from 'src/user/models/user.interface';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService){}

    generateJWT(user: User): Observable <string> {
        return from(this.jwtService.signAsync({user}));
    }

    hashPassword(password: string): Observable <string> {
        return from<string>(bcrypt.hash(password, 12));

    }

    comparePasswords(newPassword: string, passwortHash: string): Observable<any>{
        return from(bcrypt.compare(newPassword, passwortHash));
    }

}