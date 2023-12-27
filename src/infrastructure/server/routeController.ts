import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';

import { IBootstrapComponent } from '@lib/bootstrap/bootstrapComponentInterface';

export class RouteControllerApp implements IBootstrapComponent {
    async configure(): Promise<void> {
        useContainer(Container);
    }
}
