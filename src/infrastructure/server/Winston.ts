import { configure, format, transports } from 'winston';

import { IBootstrapComponent } from '@lib/bootstrap/BootstrapComponentInterface';

import { env } from '../../Env';

export class WinstonApp implements IBootstrapComponent {
    async configure(): Promise<void> {
        configure({
            transports: [
                new transports.Console({
                    level: env.log.level,
                    handleExceptions: true,
                    format: env.node !== 'development'
                        ? format.combine(
                            format.json()
                        )
                        : format.combine(
                            format.colorize(),
                            format.simple()
                        ),
                }),
            ],
        });
    }
}
