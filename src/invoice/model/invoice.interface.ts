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
items: Array<{ description: string; rate: number; quantity: number }>;
}