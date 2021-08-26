import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { CustomerEntity } from '../model/customer.entity';
import { Customer } from '../model/customer.interface';

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService) { }


    // @Post()
    // createCustomer(@Body() customer 
            
    //       }
}
