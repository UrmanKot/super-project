export class SalesChain {
  chain_status: SalesStatus;
  comment: string;
  company: string;
  company_id: number;
  created_at: string;
  events: any[];
  files: any[];
  id: number;
  statuses: []
}

export class SalesChains {
  prev: string;
  next: string;
  count: number;
  results: SalesChain[]
}

export class SalesStatus {
  id: number;
  date: string;
  name?: string;
  is_active: boolean;
  sales_chain: number;
  status: {
    id: number
    name: string
  };
}
