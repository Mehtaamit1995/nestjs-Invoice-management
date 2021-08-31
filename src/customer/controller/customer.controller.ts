import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { CustomerEntity } from '../model/customer.entity';
import { Customer } from '../model/customer.interface';

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService) { }


    // @Post()
    // createCustomer(@Body() customer: Promise<CustomerEntity>{
    // return this.customerRepository.save(details);    
    // }

    // @Get()
    // findAll(): Promise<CustomerEntity>{
    // return thix.CustomerRepository.find();  
    // }    


    // @Get()
    // findOne(id: string): Promise<CustomerEntity> {
    // return this.customerRepository.findOne(id);
    // }


}
