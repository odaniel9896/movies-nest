import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { userProvider } from 'src/infra/typeorm/providers';
import { jwt } from 'src/main/config/constants';
import { AuthenticationController } from 'src/presentation/controllers/authentication/authentication.controller';
import { AuthenticationService } from './authentication.service';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwt.secret,
      signOptions: { expiresIn: '10d' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, ...userProvider, JwtStrategy],
})
export class AuthenticationModule {}
