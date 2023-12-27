import { BootstrapSettings } from './BootstrapSettings';

export interface IBootstrapComponent {
    configure(settings: BootstrapSettings): Promise<void>
}
