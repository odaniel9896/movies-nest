import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  async findUserByEmailAndPassword(email: string, password: string) {
    return 'a';
  }
}
