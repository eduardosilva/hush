import * as path from 'path';
import { Service } from 'typedi';
import * as winston from 'winston';

@Service()
export class Logger {

    public static DEFAULT_SCOPE = 'app';

    private static parsePathToScope(filepath: string): string {
        if (filepath.indexOf(path.sep) >= 0) {
            filepath = filepath.replace(process.cwd(), '');
            filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
            filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
            filepath = filepath.replace('.ts', '');
            filepath = filepath.replace('.js', '');
            filepath = filepath.replace(path.sep, ':');
        }
        return filepath;
    }

    private scope: string;

    constructor(scope?: string) {
        this.scope = Logger.parsePathToScope((scope) ? scope : Logger.DEFAULT_SCOPE);
    }

    public debug(message: string, ...args: string[]): void {
        this.log('debug', message, args);
    }

    public info(message: string, ...args: string[]): void {
        this.log('info', message, args);
    }

    public warn(message: string, ...args: string[]): void {
        this.log('warn', message, args);
    }

    public error(message: string, ...args: string[]): void {
        this.log('error', message, args);
    }

    private log(level: string, message: string, args: string[]): void {
        if (winston) {
            winston[level](`${this.formatScope()} ${message}`, args);
        }
    }

    private formatScope(): string {
        return `[${this.scope}]`;
    }

}
