export interface LoggerInterface {
    debug(message: string, ...args: string[]): void;
    info(message: string, ...args: string[]): void;
    warn(message: string, ...args: string[]): void;
    error(message: string, ...args: string[]): void;
}
