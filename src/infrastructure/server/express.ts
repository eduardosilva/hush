import * as express from 'express';
import { createExpressServer } from 'routing-controllers';

import { IBootstrapComponent } from '@lib/bootstrap/bootstrapComponentInterface';

import { env } from '../../env';

export class ExpressApp implements IBootstrapComponent {
    async configure(): Promise<void> {
        const expressApp: express.Application = createExpressServer({
            cors: true,
            classTransformer: true,
            routePrefix: env.app.routePrefix,
            defaultErrorHandler: false,
            controllers: env.app.dirs.controllers,
            middlewares: env.app.dirs.middlewares,
            interceptors: env.app.dirs.interceptors,

            /**
             * Authorization features
             */
            // authorizationChecker: authorizationChecker(connection),
            // currentUserChecker: currentUserChecker(connection),
        });

        expressApp.listen(env.app.port);
        console.log('Listening to port ' + env.app.port);
    }
}
