import { IBootstrapComponent } from './bootstrapComponentInterface';
import { BootstrapSettings } from './bootstrapSettings';

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
