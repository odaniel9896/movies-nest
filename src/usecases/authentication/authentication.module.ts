import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { userProvider } from 'src/infra/typeorm/providers';
import constants from 'src/main/config/constants';
import { AuthenticationController } from 'src/presentation/controllers/authentication/authentication.controller';
import { AuthenticationService } from './authentication.service';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: constants().JWT_SECRET,
      signOptions: { expiresIn: '10d' },
    }),
    DatabaseModule,
    PassportModule,
  ],
  controllers: [AuthenticationController],
  providers: [JwtStrategy, AuthenticationService, ...userProvider],
})
export class AuthenticationModule {}
