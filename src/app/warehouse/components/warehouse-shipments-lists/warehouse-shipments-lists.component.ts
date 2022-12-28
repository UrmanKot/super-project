import {Component, OnInit} from '@angular/core';
import {ShipmentService} from '../../services/shipment.service';
import {Shipment} from '../../models/shipment';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'pek-warehouse-shipments-lists',
  templateUrl: './warehouse-shipments-lists.component.html',
  styleUrls: ['./warehouse-shipments-lists.component.scss']
})
export class WarehouseShipmentsListsComponent implements OnInit {
  isLoading = true;
  shipments: Shipment[] = [];
  selectedShipment: Shipment;

  constructor(
    private readonly shipmentService: ShipmentService,
  ) {
  }

  ngOnInit(): void {
    this.getShipments();
  }

  getShipments() {
    this.shipmentService.get().subscribe(shipments => {
      this.shipments = shipments;
      this.isLoading = false;
    });
  }

}
