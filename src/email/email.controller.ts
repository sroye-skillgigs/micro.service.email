import { ApiUseTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Post, Inject, UseGuards, Get } from '@nestjs/common';
import { Logger } from 'winston';
import { Email } from './email.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('Email')
@ApiBearerAuth()
@Controller('api/email')
export class EmailController {
    constructor(@Inject('winston') private readonly logger: Logger) {}

    @Get()
    @UseGuards(AuthGuard('bearer'))
    async Get(): Promise<any> {
        // this.logger.log('info', 'simple get');
        this.logger.info('simple get');

        return new Promise<any> (resolve => {
            resolve('all good');
        });
    }

    @Post()
    @UseGuards(AuthGuard())
    @ApiResponse({
        description: 'Email has been sent',
        status: 201,
    })
    @ApiResponse({
        description: 'Forbidden',
        status: 403,
    })
    @ApiResponse({
        description: 'Internal Server Error',
        status: 500,
    })
    async Post(@Body() payload: Email): Promise<any> {
        this.logger.log('info', JSON.stringify(payload));

        return new Promise(resolve => {
            resolve();
        });
    }
}
