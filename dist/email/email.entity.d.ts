import { Address } from './address.entity';
import { KeyValuePair } from './../common/keyvaluepair.entity';
export declare class Email {
    bccAddresses: Address[];
    fromAddress: Address;
    mergeVars: KeyValuePair[];
    subject: string;
    templateName: string;
    toAddresses: Address[];
}
