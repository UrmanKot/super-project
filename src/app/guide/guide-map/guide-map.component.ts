import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {
  GuideMapManufacturingProcessComponent
} from "./components/guide-map-manufacturing-process/guide-map-manufacturing-process.component";
import {DynamicComponentLoaderDirective} from "@shared/directives/dynamic-component-loader.directive";
import {
  GuideMapOutsoursingProcurementComponent
} from "./components/guide-map-outsoursing-procurement/guide-map-outsoursing-procurement.component";
import {
  GuideMapProductionListPreparationByWarehouseComponent
} from "./components/guide-map-production-list-preparation-by-warehouse/guide-map-production-list-preparation-by-warehouse.component";
import {
  GuideMapProductionListProcurementComponent
} from "./components/guide-map-production-list-procurement/guide-map-production-list-procurement.component";
import {
  GuideMapProductionRequestProcessingComponent
} from "./components/guide-map-production-request-processing/guide-map-production-request-processing.component";

export type GuideMapType =
  'manufacturing-process' |
  'outsoursing-procurement' |
  'production-list-preparation-by-warehouse' |
  'production-list-procurement' |
  'production-request-processing'

export class GuideMapItem {
  title: string;
  type: GuideMapType
}

@Component({
  selector: 'pek-guide-map',
  templateUrl: './guide-map.component.html',
  styleUrls: ['./guide-map.component.scss']
})
export class GuideMapComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicComponentLoaderDirective, { static: true })
  dynamicComponent!: DynamicComponentLoaderDirective;

  type: GuideMapType;
  selectedGuideMapItem: GuideMapItem;

  items: GuideMapItem[] = [
    {title: 'Manufacturing process', type: 'manufacturing-process'},
    {title: 'Outsoursing procurement', type: 'outsoursing-procurement'},
    {title: 'Production List preparation by warehouse', type: 'production-list-preparation-by-warehouse'},
    {title: 'Production list procurement', type: 'production-list-procurement'},
    {title: 'Production request processing', type: 'production-request-processing'},
  ]

  searchTitle = '';

  constructor(
  ) {
  }

  renderComponent() {
    this.dynamicComponent.viewContainerRef.clear();

    switch (this.type) {
      case "manufacturing-process":
        this.dynamicComponent.viewContainerRef.createComponent(GuideMapManufacturingProcessComponent);
        break;
      case "outsoursing-procurement":
        this.dynamicComponent.viewContainerRef.createComponent(GuideMapOutsoursingProcurementComponent);
        break;
      case "production-list-preparation-by-warehouse":
        this.dynamicComponent.viewContainerRef.createComponent(GuideMapProductionListPreparationByWarehouseComponent);
        break;
      case "production-list-procurement":
        this.dynamicComponent.viewContainerRef.createComponent(GuideMapProductionListProcurementComponent);
        break;
      case "production-request-processing":
        this.dynamicComponent.viewContainerRef.createComponent(GuideMapProductionRequestProcessingComponent);
        break;
    }
  }

  ngOnInit(): void {
    this.items.sort((a, b) => a.title.localeCompare(b.title));

    const modal = document.querySelector('.guide-modalbox');
    modal.classList.add('guide-modalbox_reference');
  }

  onSelectItem(item: any) {
    this.type = item.type;
    if (this.selectedGuideMapItem && this.selectedGuideMapItem.title === item.title) {
      this.selectedGuideMapItem = null;
      return;
    }

    this.selectedGuideMapItem = item;
    this.renderComponent();
    setTimeout(() => this.openingImage());

  }

  openingImage() {
    const guide = document.querySelector('.guide');
    const images = guide.querySelectorAll('img');

    const imageBlock = guide.querySelector('.guide__image-box');

    images.forEach(image => {
      const idx = image.src.indexOf('/assets/');

      image.addEventListener('click', () => {
        imageBlock.innerHTML = '';
        imageBlock.classList.add('guide__image-box_open');

        const newImage = document.createElement('img');
        newImage.src = image.src.slice(idx + 1);
        imageBlock.appendChild(newImage);

        imageBlock.querySelector('img').addEventListener('click', evt => {
          evt.stopPropagation();
        });
      });
    });
  }

  ngOnDestroy() {
    const modal = document.querySelector('.guide-modalbox');
    modal.classList.remove('guide-modalbox_reference');
  }
}
