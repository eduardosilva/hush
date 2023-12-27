import 'reflect-metadata'; // used by routing-controllers ioc

import { ExpressApp } from '@infrastructure/server/ExpressApp';
import { GraphqlApp } from '@infrastructure/server/graphql/GraphqlApp';
import { RouteControllerApp } from '@infrastructure/server/RouteController';
import { TypeormApp } from '@infrastructure/server/Typeorm';
import { WinstonApp } from '@infrastructure/server/Winston';
import { Bootstrap } from '@lib/bootstrap/Bootstrap';

const bootstrap = new Bootstrap([
    new ExpressApp(),
    new RouteControllerApp(),
    new WinstonApp(),
    new GraphqlApp(),
    new TypeormApp(),
]);
bootstrap.run();

// console.log("ok it's working");
