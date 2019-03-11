import { Injectable, Inject } from '@nestjs/common';
import { Logger } from 'winston';

@Injectable()
export class AuthService {
    constructor(@Inject('winston') private readonly logger: Logger) {}

    async validateUser(token: string): Promise<boolean> {
        this.logger.info('validate user: ' + token);
        return await new Promise<any>(resolve => {
            if (token) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    }
}
