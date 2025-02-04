import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SighInProvider } from './sigh-in.provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly signInProvider: SighInProvider,
  ) {}

  public signIn(signInDto: SignInDto) {
    return this.signInProvider.signIn(signInDto);
  }

  public isAuth() {
    return true;
  }
}
