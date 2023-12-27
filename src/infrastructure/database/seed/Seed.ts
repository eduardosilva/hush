import 'reflect-metadata';

import { getDataSource } from '@infrastructure/server/Typeorm';

import { CreateUsers } from './CreateUsers';

export class Seed {
    public static async run() {

        const dataSource = getDataSource();

        await dataSource.initialize();

        const user = new CreateUsers();
        const entityManager = dataSource.createEntityManager();
        await user.execute(entityManager)

    }
}

Seed.run();
