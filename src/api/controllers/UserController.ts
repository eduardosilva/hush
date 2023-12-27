import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';

import { User } from '@api/types/User';
import { UserService } from '@services/UserService';

@JsonController('/users')
@Service()
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Get()    // @ResponseSchema(UserResponse, { isArray: true })
    public find(): Promise<User[]> {
        return this.userService.find()
    }
}
