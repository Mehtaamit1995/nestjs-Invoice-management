// import { Module } from '@nestjs/common';
// import { AuthService } from './service/auth.service';
// import { AuthController } from './auth.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { JwtStrategy } from './jwt.strategy';
// import { UsersRepository } from './users.repository';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule} from '@nestjs/jwt';
// import { ConfigModule, ConfigService } from '@nestjs/config';


// @Module({
//   imports: [
//     ConfigModule,
//     PassportModule.register({ defaultStrategy: 'jwt' }),
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         secret: configService.get('JWT_SECRET'),
//         signOptions: {
//         expiresIn:3600,
//       },
//       })
//     }),
//     TypeOrmModule.forFeature([UsersRepository]),
//   ],
//     providers: [AuthService, JwtStrategy],
//     controllers: [AuthController],
//     exports: [JwtStrategy, PassportModule],
//   })
// export class AuthModule {}


import { Module, forwardRef } from '@nestjs/common';
import { JwtModule} from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './service/auth.service';
import { RolesGuard } from './guards/roles.guard';
import { JwtAuthGuard } from './guards/jwt-guards';
import { JwtStrategy } from './guards/jwt-strategy';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        forwardRef(() => UserModule),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {expiresIn: '10000s'}
            })
        })
    ],
    providers: [AuthService, RolesGuard, JwtAuthGuard, JwtStrategy ],
    exports: [AuthService]
})
export class AuthModule { }