import { Module, forwardRef} from '@nestjs/common';
import { CustomerController } from './controller/customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceEntity } from '../invoice/model/invoice.entity';
import { CustomerEntity } from './model/customer.entity';
import { CustomerService } from './service/customer.service';


@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity]), forwardRef(() => CustomerEntity)],
  providers: [CustomerService, CustomerController],
  exports: [CustomerService]
})
export class CustomerModule {}
