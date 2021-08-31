import { Module ,forwardRef } from '@nestjs/common';
import { InvoiceService } from './service/invoice.service';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceEntity } from './model/invoice.entity';
import { CustomerEntity } from 'src/customer/model/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity]), forwardRef(() => CustomerEntity)],
  providers: [InvoiceService],
  controllers: [InvoiceController],
  exports: [InvoiceService]
})
export class InvoiceModule {}
