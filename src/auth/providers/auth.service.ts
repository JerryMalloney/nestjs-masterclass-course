import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SighInProvider } from './sigh-in.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { RefreshTokensProvider } from './refresh-tokens.provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly signInProvider: SighInProvider,
    private readonly refreshTokenProvider: RefreshTokensProvider,
  ) {}

  public signIn(signInDto: SignInDto) {
    return this.signInProvider.signIn(signInDto);
  }

  public async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    return this.refreshTokenProvider.refreshtokens(refreshTokenDto);
  }
}
