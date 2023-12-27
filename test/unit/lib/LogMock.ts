import { Logger } from '@infrastructure/logger';

export class LogMock extends Logger {

    public debugMock = jest.fn();
    public infoMock = jest.fn();
    public warnMock = jest.fn();
    public errorMock = jest.fn();

    public debug(message: string, ...args: string[]): void {
        this.debugMock(message, args);
    }

    public info(message: string, ...args: string[]): void {
        this.infoMock(message, args);
    }

    public warn(message: string, ...args: string[]): void {
        this.warnMock(message, args);
    }

    public error(message: string, ...args: string[]): void {
        this.errorMock(message, args);
    }

}
