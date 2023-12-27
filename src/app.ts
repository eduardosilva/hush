import 'reflect-metadata'; // used by routing-controllers ioc

import { ExpressApp } from '@infrastructure/server/express';
import { RouteControllerApp } from '@infrastructure/server/routeController';
import { WinstonApp } from '@infrastructure/server/winston';
import { Bootstrap } from '@lib/bootstrap/bootstrap';

const bootstrap = new Bootstrap([
    new ExpressApp(),
    new RouteControllerApp(),
    new WinstonApp()
]);
bootstrap.run();

console.log("ok it's working");
