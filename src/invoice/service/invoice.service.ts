import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceEntity } from '../model/invoice.entity';
import {Invoice } from '../model/invoice.interface';
import { Repository } from 'typeorm';
import { CustomerService } from '../../customer/service/customer.service';


@Injectable()
export class InvoiceService {

    constructor(
        @InjectRepository(InvoiceEntity)
        private invoiceRepository: Repository<InvoiceEntity>,
        private customerService: CustomerService
      ) { }
    
      async create(invoice: Invoice): Promise<InvoiceEntity> {
        const customer = await this.customerService.findOne(invoice.customer);
        const subTotal = invoice.items.reduce((acc, curr) => {
          return acc + Number((curr.rate * curr.quantity).toFixed(2))
        }, 0)

    
        const taxAmount = subTotal * Number((invoice.taxRate / 100).toFixed(2));
        const total = subTotal + taxAmount;
        const outstandingBalance = total;
        return this.invoiceRepository.save({
          ...invoice,
          customer,
          subTotal,
          taxAmount,
          total,
          outstandingBalance
        } as any);
    
      }


      findAll(): Promise<InvoiceEntity[]> {
        return this.invoiceRepository.find();
      }
    
      findByCustomer(id: string): Promise<InvoiceEntity[]>{
        return this.invoiceRepository.createQueryBuilder("invoice")
        .where("invoice.customer = :id", { id })
        .getMany();
      }
    
      findOne(id: string): Promise<InvoiceEntity> {
        return this.invoiceRepository.findOne(id);
      }
}

