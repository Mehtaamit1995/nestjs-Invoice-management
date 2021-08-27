import { InvoiceEntity } from "src/Invoice/model/invoice.entity";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert , CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity()
export class CustomerEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ length: 200, nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ unique: true, nullable: false })
    phone: number;

    @Column({unique: true, nullable: false})
    address: string;

    @Column({select: false, })
    city: string;

    @Column({select: false, })
    state: string;

    @Column({select: false, nullable: false})
    postal_code: number;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }

    // one customer can have multiple invoices.
    @OneToMany(type => InvoiceEntity, invoice => invoice.customer)
    invoices: InvoiceEntity[]

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

}
