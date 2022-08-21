import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { createHash } from 'crypto';
import { User } from 'src/infra/typeorm/entities';
import { RegisterDto } from 'src/presentation/dtos';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async register({ email, name, password }: RegisterDto) {
    const user = await this.userRepository.findOneBy({ email });
    if (user) throw new UnauthorizedException('email already registered');
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    return await this.userRepository.insert({
      email,
      name,
      password: hashedPassword,
    });
  }
}
