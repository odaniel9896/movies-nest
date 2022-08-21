import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/infra/typeorm/entities';
import { Repository } from 'typeorm';
import { User as UserModel } from 'src/domain/models/';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async findUserByEmailAndPassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ token: string }> {
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    const user = await this.userRepository.findOneBy({
      email,
      password: hashedPassword,
    });
    if (!user) throw new NotFoundException('user not found');
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      name: user.email,
    });
    return { token };
  }
}
