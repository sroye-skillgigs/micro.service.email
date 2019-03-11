import { Logger } from 'winston';
import { Email } from './email.entity';
export declare class EmailController {
    private readonly logger;
    constructor(logger: Logger);
    Get(): Promise<any>;
    Post(payload: Email): Promise<any>;
}
