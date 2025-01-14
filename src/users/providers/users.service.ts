import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user.param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to users table and perform business operations
 */
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  /**
   * The methos to get all the usres from the database
   * @param getUserParamDto
   * @param limit
   * @param page
   * @returns
   */
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

  /**
   * Find a single user by the id of the user
   * @param id
   * @returns
   */
  public findOneById(id: string) {
    return {
      id: 123,
      firstName: 'John',
      email: ' ',
    };
  }
}
