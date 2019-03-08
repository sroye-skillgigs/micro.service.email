import { Logger } from '@nestjs/common';

export class SGLogger extends Logger {
    log (message: string, context?: string) {
        super.log(message, context);
    }

    error (message: string, trace?: string, context?: string) {
        super.error(message, trace, context);
    }

    warn (message: string, context?: string) {
        super.warn(message, context);
    }
}