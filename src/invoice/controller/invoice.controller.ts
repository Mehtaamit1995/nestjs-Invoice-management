import { Controller, Get } from '@nestjs/common';
import { string } from 'yargs';
import { Observable, of } from 'rxjs';
import { InvoiceService } from '../service/invoice.service';
import { InvoiceEntity } from '../model/invoice.entity';

@Controller('invoice')
export class InvoiceController {

    constructor(private invoiceService: InvoiceService) { }


    // @Get()
    // findAll(): Observable<Invoice> {
    //     return this.invoiceService.findAll();
    // }

    // @Get()
    // findByCustomer(id: string): Promise<InvoiceEntity[]>{
    //     return this.invoiceRepository.createQueryBuilder("invoice")
    //     .where("invoice.customer = :id", { id })
    //     .getMany();
    //   }


   
}