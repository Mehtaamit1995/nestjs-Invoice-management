import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from 'uuid';
import { CustomerEntity } from '../../customer/model/customer.entity';


export class Item {
    @Column()
    description: string;
  
    @Column()
    rate: number;
  
    @Column()
    quantity: number 
}

@Entity()
export class InvoiceEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ length: 300, nullable: false })
    invoiceNo: string;

    @Column('text')
    description: string;

    @Column()
    taxRate: number;

    // one customer can have multiple invoices
    @ManyToOne(type => CustomerEntity, customer => customer.invoices)
    customer: CustomerEntity;

    @Column()
    taxAmount: number;

    @Column()
    subTotal: number;

    @Column()
    total: string;

    @Column({
        default: 0
    })
    amountPaid: number;

    @Column()
    outstandingBalance: number;

    @Column({
        type: 'jsonb',
        array: false,
        default: [],
        nullable: false,
      })

    Items: Item[];

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

}


