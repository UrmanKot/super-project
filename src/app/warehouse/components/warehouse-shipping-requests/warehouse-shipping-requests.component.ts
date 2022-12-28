import {Component, OnInit} from '@angular/core';
import {Company} from '../../../crm/models/company';
import {CompanyService} from '../../../crm/services/company.service';
import {AdapterService} from '@shared/services/adapter.service';
import {DeliveryChain} from '../../models/delivery-chain';
import {DeliveryChainService} from '../../services/delivery-chain.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {environment} from '@env/environment.prod';

@Component({
  selector: 'pek-warehouse-shipping-requests',
  templateUrl: './warehouse-shipping-requests.component.html',
  styleUrls: ['./warehouse-shipping-requests.component.scss']
})
export class WarehouseShippingRequestsComponent implements OnInit {
  link = environment.link_url + 'dash/';

  isLoading = true;
  isLoadingCustomers = true;

  customers: Company[] = [];
  chains: DeliveryChain[] = [];
  selectedChain: DeliveryChain;

  searchForm: FormGroup = this.fb.group({
    created_after: [null],
    created_before: [null],
    customer_id: [null],
    is_open: [null],
  });

  requestsTypes = [
    {name: 'Open Requests', value: true},
    {name: 'Closed Requests', value: false},
  ];

  query: QuerySearch[] = [];

  constructor(
    private readonly companyService: CompanyService,
    private readonly deliveryService: DeliveryChainService,
    private readonly adapterService: AdapterService,
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getChains();
    this.getCustomers();
  }

  getChains() {
    this.deliveryService.get(this.query).subscribe(chains => {
      this.chains = chains;
      this.isLoading = false;
    });
  }

  searchChains() {
    this.isLoading = true;
    this.chains = [];
    this.query = [];

    if (this.searchForm.get('is_open')?.value !== null) {
      this.query.push({
        name: 'is_open',
        value: this.searchForm.get('is_open').value
      });
    }

    if (this.searchForm.get('customer_id')?.value) {
      this.query.push({
        name: 'customer_id',
        value: this.searchForm.get('customer_id').value
      });
    }

    if (this.searchForm.get('created_before').value) {
      this.query.push({
        name: 'created_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('created_before').value)
      });
    }

    if (this.searchForm.get('created_after').value) {
      this.query.push({
        name: 'created_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('created_after').value)
      });
    }

    this.getChains();
  }

  getCustomers() {
    this.companyService.get([{name: 'has_delivery_chain', value: 'true'}])
      .subscribe(customers => {
        this.customers = customers;
        this.isLoadingCustomers = false;
      });
  }

  goToChain(id: number) {
    window.open(`${this.link}delivery-chains/${id}`);
  }
}
