import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '../customer/model/customer.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(customerEntity: CustomerEntity, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: customerEntity.email,
      subject: 'Invoice ',
      template: './invoice',
      context: { 
        name: customerEntity.name,
        url,
      },
    });
  }
}
