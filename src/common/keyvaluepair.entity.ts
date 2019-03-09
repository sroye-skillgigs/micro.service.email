import { ApiModelProperty } from '@nestjs/swagger';

export class KeyValuePair {
    @ApiModelProperty({
        description: 'Key',
        required: false,
        type: String,
    })
    key: string;

    @ApiModelProperty({
        description: 'Value',
        required: true,
        type: String,
    })
    value: string;
}
