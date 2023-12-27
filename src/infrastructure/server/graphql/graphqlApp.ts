import { createHandler } from 'graphql-http/lib/use/express';
import path from 'path';
import { buildSchema } from 'type-graphql';

import { IBootstrapComponent } from '@lib/bootstrap/bootstrapComponentInterface';
import { BootstrapSettings } from '@lib/bootstrap/bootstrapSettings';

import { env } from '../../../env';

export class GraphqlApp implements IBootstrapComponent {
    async configure(settings: BootstrapSettings): Promise<void> {
        const app = settings.Express;
        const schema = await buildSchema({
            resolvers: env.app.dirs.resolvers,
            // automatically create `schema.gql` file with schema definition in current folder
            emitSchemaFile: path.resolve(__dirname, '../api', 'schema.gql'),
        });
        app.all('/graphql', createHandler({ schema }));
    }
}
