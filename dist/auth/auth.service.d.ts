import { Logger } from 'winston';
export declare class AuthService {
    private readonly logger;
    constructor(logger: Logger);
    validateUser(token: string): Promise<boolean>;
}
