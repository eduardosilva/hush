import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { EntityManager } from 'typeorm';

import { User as UserEntity } from '@entities/User';
import { InstanceManager } from '@infrastructure/server/Typeorm';

// import { UserService } from '@services/UserService';
import { User } from '../types/User';

@Service()
@Resolver(() => User)
export class UserResolver {

    constructor(
        @InstanceManager() private entityManager: EntityManager,
        // private userService: UserService
    ) { }

    @Query(() => [User])
    public async users(): Promise<User[]> {
        // var mko = await this.entityManager.find(UserEntity);
        // return this.userService.find();
        return this.entityManager.find(UserEntity);
    }

}
