export class InvoiceItems{
    
    description?: string;
    rate?: number;
    quantity?: number
}

export class Invoice{

customer?: string;	
invoiceNo?: string;
description?: string;
taxRate: number;
created_at: Date;
updated_at: Date;
}