import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/infra/typeorm/entities';
import { Repository } from 'typeorm';
import { User as UserModel } from 'src/domain/models/';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findUserByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserModel> {
    const user = await this.userRepository.findOneBy({ email, password });
    if (!user) throw new NotFoundException('user not found');
    return user;
  }
}
