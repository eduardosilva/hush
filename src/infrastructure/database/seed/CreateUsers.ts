import { EntityManager } from 'typeorm';
import * as uuid from 'uuid';

import { User } from '../../../entities/User';
import { Seed } from './SeedInterface';

export class CreateUsers implements Seed {
    public execute(entityManager: EntityManager): Promise<void> {

        entityManager.createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { id: uuid.v1(), firstName: "Timber", lastName: "Saw", email: "saw.timber@swagger.com", username: "saw", password: "123" },
                { id: uuid.v1(), firstName: "Phantom", lastName: "Lancer", email: "lancer.phantom@swagger.com", username: "lancer", password: "123" },
            ]).execute();

        return Promise.resolve();
    }
}
