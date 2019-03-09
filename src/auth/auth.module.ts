import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'bearer',
            session: true,
        }),
    ],
    providers: [
        AuthService,
        HttpStrategy,
    ],
})
export class AuthModule {}
