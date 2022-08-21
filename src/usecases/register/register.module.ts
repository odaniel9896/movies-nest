import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/typeorm/config/database.module';
import { userProvider } from 'src/infra/typeorm/providers';
import { RegisterController } from 'src/presentation/controllers/register/register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterController],
  providers: [RegisterService, ...userProvider],
})
export class RegisterModule {}
