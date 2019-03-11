import { AuthService } from './auth.service';
import { Logger } from 'winston';
declare const HttpStrategy_base: new (...args: any[]) => any;
export declare class HttpStrategy extends HttpStrategy_base {
    private readonly logger;
    private readonly authService;
    constructor(logger: Logger, authService: AuthService);
    validate(token: string): Promise<boolean>;
}
export {};
