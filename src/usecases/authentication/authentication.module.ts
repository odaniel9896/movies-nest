import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { userProvider } from 'src/infra/typeorm/providers';
import { AuthenticationController } from 'src/presentation/controllers/authentication/authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, ...userProvider],
})
export class AuthenticationModule {}
