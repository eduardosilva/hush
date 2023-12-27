import { Service } from 'typedi';

import { User } from '@api/types/User';
import { Logger } from '@infrastructure/logger';

@Service()
export class UserService {
    constructor(
        private log: Logger
    ) { }
    public find(): Promise<User[]> {
        this.log.info("ok that's working too");

        const result = new User();
        result.firstName = 'Eduardo';
        return Promise.resolve([result]);
    }
}
