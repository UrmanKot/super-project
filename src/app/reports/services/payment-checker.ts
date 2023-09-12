export class PaymentChecker {
  exact_entries: {
    invoices: ExactEntriesInvoice[];
    service_invoices: ExactEntriesInvoice[];
    xml_payments: any[]
  };
  extra_entries: {
    invoices: ExtraInvoice[];
    service_invoices: ExtraInvoice[];
    xml_payments: ExtraPayment[];
  };
  similar_entries: {
    invoices: ExactEntriesInvoice[];
    service_invoices: ExactEntriesInvoice[];
    xml_payments: ExtraPayment[];
  };
}

export class ExactEntriesInvoice {
  id?: number;
  invoice_id: number;
  invoice_invoice_date: string;
  invoice_total_price: number | string;
  order_id: number;
  payment_id?: number;
  payment_amount: number | string;
  payment_date: string;
  full_entry: boolean;
  invoice_supplier_name?: string;
  xml_company_name?: string;
  type: 'invoice' | 'service-invoice';
  completed: boolean;
}

export class ExtraInvoice {
  id: number;
  invoice_date: string;
  order_id: number;
  rounded_converted_total_price: any;
  supplier: string;
  isFirst?: boolean;
  isLast?: boolean;
  isGrouped?: boolean;
  totalAmount?: any;
}

export class ExtraPayment {
  amount: any;
  id: number;
  date: string;
  company_name: string;
  uid?: number;
  isFirst?: boolean;
  isLast?: boolean;
  isGrouped?: boolean;
  totalAmount?: any;
}

export class ExcludePayments {
  count: number;
  next: string;
  previous: string;
  results: ExcludePayment[];
}

export class ExcludePayment {
  id: number;
  name: string;
}
