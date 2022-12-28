import {Injectable} from '@angular/core';
import {ModalActionType} from '@shared/models/modal-action';
import {UserProfile} from '../../crm/models/user-profile';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {Area, AreaLocator} from '../../warehouse/models/area-locator';
import {CreateEditAreaComponent} from '../modals/create-edit-area/create-edit-area.component';
import {CreateEditAreaLocatorComponent} from '../modals/create-edit-area-locator/create-edit-area-locator.component';
import {CreateEditToolRequestComponent} from '../modals/create-edit-tool-request/create-edit-tool-request.component';
import {ToolOrder} from '../../warehouse/models/tool-order';
import {WarehouseSearchComponent} from '@shared/modals/warehouse-search/warehouse-search.component';
import {
  CreateUpdateToolOrderRequestComponent
} from '../modals/create-update-tool-order-request/create-update-tool-order-request.component';
import {ToolRequest} from '../../warehouse/services/tool-request';
import {
  ProductMoveToAreaLocatorComponent
} from '../modals/product-move-to-area-locator/product-move-to-area-locator.component';
import {WarehouseProduct} from '../../warehouse/models/warehouse-product';
import {
  InstrumentsAndToolsWriteOffReturnComponent
} from '../modals/instrumentr-and-tools-writeoff-return/instruments-and-tools-write-off-return.component';

@Injectable({
  providedIn: 'root'
})
export class InstrumentAndToolsModalsService {

  constructor(
    private dialog: MatDialog
  ) { }

  createEditAreaModal(type: ModalActionType, area?: Area): Observable<Area> {
    return this.dialog
      .open<CreateEditAreaComponent>(CreateEditAreaComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, area},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditAreaLocatorModal(type: ModalActionType, locator?: AreaLocator, areaId?: number): Observable<AreaLocator> {
    return this.dialog
      .open<CreateEditAreaLocatorComponent>(CreateEditAreaLocatorComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, locator, areaId},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditToolRequestModal(type: ModalActionType, toolOrder?: ToolOrder): Observable<ToolOrder> {
    return this.dialog
      .open<CreateEditToolRequestComponent>(CreateEditToolRequestComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, toolOrder},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditToolRequestNomenclatureModal(type: ModalActionType, toolOrderId: number, toolRequest?: ToolRequest): Observable<ToolOrder> {
    return this.dialog
      .open<CreateUpdateToolOrderRequestComponent>(CreateUpdateToolOrderRequestComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, toolRequest, toolOrderId},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  searchInWarehouseNomenclatureModal(): Observable<ToolRequest> {
    return this.dialog
      .open<WarehouseSearchComponent>(WarehouseSearchComponent, {
        width: '100vw',
        maxWidth: '100vw',
        height: '100vh',
        maxHeight: '100vh',
        panelClass: 'warehouse-search',
        data: {},
        disableClose: true,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  productMoveToAreaLocatorModal(product: WarehouseProduct): Observable<WarehouseProduct> {
    return this.dialog
      .open<ProductMoveToAreaLocatorComponent>(ProductMoveToAreaLocatorComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: product,
        disableClose: true,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  productWriteOfReturnModal(product: WarehouseProduct[], type: 'writeOff' | 'warehouseReturn'): Observable<WarehouseProduct> {
    return this.dialog
      .open<InstrumentsAndToolsWriteOffReturnComponent>(InstrumentsAndToolsWriteOffReturnComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {product, type},
        disableClose: true,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}
