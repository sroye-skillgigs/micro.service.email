import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { format } from 'winston';
import winston = require('winston');
import { ConfigService } from './config.service';

@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'info',
      format: format.combine(
        winston.format.timestamp(),
        winston.format.logstash(),
      ),
      transports: new ConfigService('.env').get('NODE_ENV') === 'production' || new ConfigService('.env').get('NODE_ENV') === 'release' ?
      [
        new winston.transports.File({
          filename: 'micro.service.email.log',
        }),
      ] :
      [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: 'micro.service.email.log',
        }),
      ],
    }),
    AuthModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
