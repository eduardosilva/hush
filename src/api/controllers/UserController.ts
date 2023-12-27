import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';

import { UserService } from '@services/UserService';

// @Authorized()
@JsonController('/users')
// @OpenAPI({ security: [{ basicAuth: [] }] })
// @Controller('/users')
@Service()
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Get()    // @ResponseSchema(UserResponse, { isArray: true })
    public find(): Promise<string> {
        return this.userService.find()
    }
}
