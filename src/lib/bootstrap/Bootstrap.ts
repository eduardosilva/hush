import { IBootstrapComponent } from './BootstrapComponentInterface';
import { BootstrapSettings } from './BootstrapSettings';

export class Bootstrap {
    constructor(
        private components: IBootstrapComponent[]
    ) { }

    async run(): Promise<void> {
        const settings = new BootstrapSettings();
        for (const component of this.components) {
            await component.configure(settings);
        }
    }
}
