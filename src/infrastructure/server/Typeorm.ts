import { Container } from 'typedi';
import { DataSource } from 'typeorm';

import { IBootstrapComponent } from '@lib/bootstrap/BootstrapComponentInterface';
import { BootstrapSettings } from '@lib/bootstrap/BootstrapSettings';

import { env } from '../../Env';

const source = new DataSource({
    type: env.db.type as any, // See createConnection options for valid types
    host: env.db.host,
    port: env.db.port,
    username: env.db.username,
    password: env.db.password,
    database: env.db.database,
    synchronize: env.db.synchronize,
    logging: 'all',
    entities: env.app.dirs.entities,
    migrations: env.app.dirs.migrations,
});

export class TypeormApp implements IBootstrapComponent {
    async configure(settings: BootstrapSettings): Promise<void> {
        settings.DataSource = getDataSource();


        // if (settings) {
        //     settings.setData('connection', connection);
        //     settings.onShutdown(() => connection.close());
        // }
    }

}

export function InstanceManager() {
    return function (object: any, propertyName: string, index?: number) {

        Container.registerHandler({ object, propertyName, index, value: () => getDataSource().createEntityManager() })
    }
}

export function getDataSource() {
    if (source.isInitialized == false)
        source.initialize();

    return source;
}
