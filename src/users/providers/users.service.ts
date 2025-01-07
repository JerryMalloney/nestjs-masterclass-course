import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user.param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();

    console.log(isAuth);

    return [
      {
        firstName: 'John',
        email: 'john@oe.com',
      },
      {
        firstName: 'test',
        email: 'test@oe.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: 123,
      firstName: 'John',
      email: ' ',
    };
  }
}
