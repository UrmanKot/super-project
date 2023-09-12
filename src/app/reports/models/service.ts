import {BaseService} from "../../procurement/models/base-service";
import {Invoice} from "../../procurement/models/invoice";

export class ServiceInvoiceProduct {
    readonly id: number;
    price: string;
    discount?: string;
    base_service: number | BaseService;
    invoice: number | Invoice;
    ddv?: number;
    pure_price?: string;
  pure_total_price_converted?: number;
}
