import { ApiUseTags, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { Body, Controller, Post } from "@nestjs/common";
import { Email } from "./email.entity";

@ApiUseTags('Email')
@ApiBearerAuth()
@Controller('api/email')
export class EmailController {
    @Post()
    @ApiResponse({
        description: 'Email has been sent',
        status: 201, 
    })
    @ApiResponse({
        description: 'Forbidden',
        status: 403
    })
    @ApiResponse({
        description: 'Internal Server Error',
        status: 500
    })
    async Post(@Body() payload: Email): Promise<any> {
        return new Promise(resolve => {
            resolve();
        })
    }
}
