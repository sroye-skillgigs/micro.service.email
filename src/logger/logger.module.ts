import { Module } from '@nestjs/common';
import { SGLogger } from './logger.service';

@Module({
    providers: [SGLogger],
    exports: [SGLogger],
})
export class SGLoggerModule {}
