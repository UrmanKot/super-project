import {Component, OnInit} from '@angular/core';
import {Company} from '../../../crm/models/company';
import {CompanyService} from '../../../crm/services/company.service';
import {AdapterService} from '@shared/services/adapter.service';
import {DeliveryChain} from '../../models/delivery-chain';
import {DeliveryChainService} from '../../services/delivery-chain.service';

@Component({
  selector: 'pek-warehouse-shipping-requests',
  templateUrl: './warehouse-shipping-requests.component.html',
  styleUrls: ['./warehouse-shipping-requests.component.scss']
})
export class WarehouseShippingRequestsComponent implements OnInit {
  isLoading = true;

  customers: Company[];
  chains: DeliveryChain[] = [];
  selectedChain: DeliveryChain;

  constructor(
    private companyService: CompanyService,
    private deliveryService: DeliveryChainService,
    private adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    this.getChains();
  }

  getChains() {
    this.deliveryService.get().subscribe(chains => {
      this.chains = chains;
      this.isLoading = false;
    });
  }

}
