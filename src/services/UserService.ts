import { Service } from 'typedi';

import { Logger } from '@infrastructure/logger';

@Service()
export class UserService {
    constructor(
        private log: Logger
    ) { }
    public find(): Promise<string> {
        this.log.info("ok that's working too");
        return Promise.resolve("Ok that's working")
        // this.log.info('Find all users');
        // return this.userRepository.find({ relations: ['pets'] });
    }
}
