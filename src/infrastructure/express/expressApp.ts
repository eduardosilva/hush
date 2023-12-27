// import * as express from 'express';
// import GraphQLHTTP from 'express-graphql';
// import * as path from 'path';
// import { createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
// import { buildSchemaSync } from 'type-graphql';
// import { Container } from 'typedi';
// import { configure, format, transports } from 'winston';

// import { env } from '../../env';

// /**
//  * Export express application
//  */
// export const expressApp: express.Application = createExpressServer({
//     cors: true,
//     classTransformer: true,
//     routePrefix: env.app.routePrefix,
//     defaultErrorHandler: false,
//     controllers: env.app.dirs.controllers,
//     middlewares: env.app.dirs.middlewares,
//     interceptors: env.app.dirs.interceptors,

//     /**
//      * Authorization features
//      */
//     // authorizationChecker: authorizationChecker(connection),
//     // currentUserChecker: currentUserChecker(connection),
// });


// // Run application to listen on given port
// // if (!env.isTest) {
// // settings.setData('express_server', server);
// // }

// // Here we can set the data for other loaders
// // settings.setData('express_app', expressApp);
// routingUseContainer(Container);

// configure({
//     transports: [
//         new transports.Console({
//             level: env.log.level,
//             handleExceptions: true,
//             format: env.node !== 'development'
//                 ? format.combine(
//                     format.json()
//                 )
//                 : format.combine(
//                     format.colorize(),
//                     format.simple()
//                 ),
//         }),
//     ],
// });

// const schema = buildSchemaSync({
//     resolvers: env.app.dirs.resolvers,
//     // automatically create `schema.gql` file with schema definition in current folder
//     emitSchemaFile: path.resolve(__dirname, '../api', 'schema.gql'),
// });

// handlingErrors(schema);

// // Add graphql layer to the express app
// expressApp.use(env.graphql.route, (request: express.Request, response: express.Response) => {

//     // Build GraphQLContext
//     const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); // uuid-like
//     const container = Container.of(requestId); // get scoped container
//     const context = { requestId, container, request, response }; // create our context
//     container.set('context', context); // place context or other data in container

//     // Setup GraphQL Server
//     GraphQLHTTP({
//         schema,
//         context,
//         graphiql: env.graphql.editor,
//         formatError: error => ({
//             code: getErrorCode(error.message),
//             message: getErrorMessage(error.message),
//             path: error.path,
//         }),
//     })(request, response);
// });
