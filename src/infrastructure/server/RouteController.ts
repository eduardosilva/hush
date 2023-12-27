import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';

import { IBootstrapComponent } from '@lib/bootstrap/BootstrapComponentInterface';

export class RouteControllerApp implements IBootstrapComponent {
    async configure(): Promise<void> {
        useContainer(Container);
    }
}
