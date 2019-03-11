import { Logger } from '@nestjs/common';
export declare class SGLogger extends Logger {
    log(message: string, context?: string): void;
    error(message: string, trace?: string, context?: string): void;
    warn(message: string, context?: string): void;
}
