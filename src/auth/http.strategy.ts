import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Logger } from 'winston';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject('winston') private readonly logger: Logger,
                private readonly authService: AuthService) {
        super();
    }

    async validate(token: string): Promise<boolean> {
        this.logger.log('info', 'test');
        const validated = await this.authService.validateUser(token);
        if (!validated) {
            throw new UnauthorizedException();
        }
        return validated;
    }
}
