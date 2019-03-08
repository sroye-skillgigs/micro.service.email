import { ApiModelProperty } from '@nestjs/swagger';

export class Address {
    @ApiModelProperty({
        description: 'Full Name',
        required: false,
        type: String
    })
    name: string;

    @ApiModelProperty({
        description: 'Email Address',
        required: true,
        type: String
    })
    emailAddress: string;
}