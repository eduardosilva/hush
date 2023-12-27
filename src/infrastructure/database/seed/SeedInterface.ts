import { EntityManager } from 'typeorm';

export interface Seed {
    execute(entityManager: EntityManager): Promise<void>
}
