import { BootstrapSettings } from './bootstrapSettings';

export interface IBootstrapComponent
{
    configure(settings: BootstrapSettings):Promise<void>
}
