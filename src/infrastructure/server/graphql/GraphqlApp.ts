import { createHandler } from 'graphql-http/lib/use/express';
import expressPlayground from 'graphql-playground-middleware-express';
import path from 'path';
import { buildSchemaSync } from 'type-graphql';
import Container from 'typedi';

import { IBootstrapComponent } from '@lib/bootstrap/BootstrapComponentInterface';
import { BootstrapSettings } from '@lib/bootstrap/BootstrapSettings';

import { env } from '../../../Env';

export class GraphqlApp implements IBootstrapComponent {
    async configure(settings: BootstrapSettings): Promise<void> {
        const app = settings.Express;
        const schema = buildSchemaSync({
            resolvers: env.app.dirs.resolvers,
            // automatically create `schema.gql` file with schema definition in current folder
            emitSchemaFile: path.resolve(__dirname, '../../../api', 'schema.gql'),
            container: Container
        });

        app.use(env.graphql.route, createHandler({ schema }));

        if (env.graphql.editor)
            app.get('/playground', expressPlayground({ endpoint: '/graphql' }))
    }
}
