import { ApiModelProperty } from '@nestjs/swagger';
import { Address } from "./address.entity";
import { KeyValuePair } from 'src/common/keyvaluepair.entity';

export class Email {
    @ApiModelProperty({
        description: 'Blind Carbon Copy Email Addresses',
        isArray: true,
        required: false,
        type: Address
    })
    bccAddresses: Address[];

    @ApiModelProperty({
        description: 'From Email Address',
        required: false,
        type: Address
    })
    fromAddress: Address;

    @ApiModelProperty({
        description: 'Merge Variables',
        isArray: true,
        required: false,
        type: KeyValuePair
    })
    mergeVars: KeyValuePair[];

    @ApiModelProperty({
        description: 'Subject',
        required: false,
        type: String
    })
    subject: string;

    @ApiModelProperty({
        description: 'Template Name',
        required: false,
        type: String
    })
    templateName: string;

    @ApiModelProperty({
        description: 'To Email Addresses',
        isArray: true,
        required: false,
        type: Address
    })
    toAddresses: Address[];
}