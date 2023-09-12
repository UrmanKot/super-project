import {Invoice} from "./invoice";

export class ServiceInvoice extends Invoice {
}

export class ServiceInvoiceFile {
  readonly id: number;
  file: string;
  service_invoice_id: number;
}
