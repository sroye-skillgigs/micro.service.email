import { Email } from './email.entity';

export class EmailService {
    send(paylaod: Email): Promise<any> {
        return new Promise(resolve => {
            resolve();
        });
    }
}
