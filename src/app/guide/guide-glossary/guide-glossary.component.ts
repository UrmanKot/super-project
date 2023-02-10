import {AfterViewInit, Component, OnInit} from '@angular/core';

export class GlossaryItem {
  title: string;
  description: string;
  images?: string[];
}

@Component({
  selector: 'pek-guide-glossary',
  templateUrl: './guide-glossary.component.html',
  styleUrls: ['./guide-glossary.component.scss']
})
export class GuideGlossaryComponent implements OnInit {

  searchTitle = '';

  selectedItem: GlossaryItem = null;

  glossary: GlossaryItem[] = [
    {
      title: 'Product structure',
      images: ['1.png'],
      description: 'Product structure represents a hierarchical structure of the product indicating the technological operations required for the production of the selected item. The hierarchy makes it possible to specify the sequence of production of a product - according to the hierarchy, it is impossible to get a parent element without having or producing a child.'
    },
    {
      title: 'Production list',
      images: ['2.png'],
      description: 'A production list is an assembly sent to production, for which it is necessary to check the availability of the necessary items in the warehouse, send a request for the purchase of purchased items and prepare all available items on one locator, so that later, when production requests the necessary items for sub assemblies, quickly prepare them and put into production.'
    },
    {
      title: 'Production list deficit',
      images: ['3.png'],
      description: 'If we have no required quantity of items on stock or the items is reserved for other production list that we have a production list deficit. This item will have status “deficit” in production plan till we get it on stock and reserve it for this production list.'
    },
    {
      title: 'Actual quantity for production list',
      images: ['4.png', '5.png'],
      description: 'The quantity, available for this production list item in stock. It is necessary to put down the actual quantity when creating a new production list. Depend of availability we will see the status of items in production list and production plan.',
    },
    {
      title: 'Free warehouse quantity',
      images: ['6.png'],
      description: 'Available warehouse quantity. After we set actual quantity for production list item this quantity is reserved for this production list and not available for reservation for another. Free warehouse quantity – stock quantity, that we can use for production list items.'
    },
    {
      title: 'Warehouse reservation/reserved quantity',
      description: 'After we set actual quantity, we reserve required quantity for production list from available warehouse quantity and can use this quantity only for manufacture of product, for which this quantity is reserved.'
    },
    {
      title: 'Cancel actual quantity',
      images: ['7.png'],
      description: 'Cancellation of reservation of reserved for production list items and make them free, to use for other production list.'
    },
    {
      title: 'Procurement auto request',
      images: ['8.png'],
      description: 'Request for procurement items, created automatically after setting of actual quantity for production list. Procurement manager will see a name of production list, formed this request. This request connected to this production list an production plan for this production list. In production plan for this item will be shown a status of procurement.'
    },
    {
      title: 'Production requests',
      images: ['9.png'],
      description: 'Request to warehouse for parts, required to manufacture ordered to own production or outsourcing chain.'
    },
    {
      title: 'Production plan',
      images: ['10.png'],
      description: 'Gantt style schedule for manufacturing. Include Structure of product with stock statuses, calendar, resource planing option, order creation option.'
    },
    {
      title: 'General procurement',
      images: ['11.png', '12.png'],
      description: 'A procurement module, includes an option for all company expenses and procurement by any categories, that can be configured.'
    },
    {
      title: 'Outsourcing procurement',
      description: 'The procurement module, supports outsourcing chain procurement. Include all options, required for outsourcing supply chain.'
    },
    {
      title: 'Production list procurement',
      description: 'The procurement module, supports procurement chain for production list auto requests.'
    },
    {
      title: 'Auxiliary invoice',
      description: 'Service invoices, connected to material procurement invoices – delivery, custom e.t.c. and influencing to end cost of materials. Should be created inside of procurement chain for this procured materials.'
    },
    {
      title: 'Procurement request',
      images: ['13.png'],
      description: 'Request to procurement items and materials. Can be auto for production list or manual for all other purposes – manufacture, tools, office e.t.c. List of procurement request will form procurement'
    },
    {
      title: 'Purchased items/parts',
      description: 'Type warehouse parts, that can be procured in market and don’t require additional manufacturing process. Like example bolts, nuts, steel pipes, motors, laptops.'
    },
    {
      title: 'Manufactured parts/items',
      description: 'Type of warehouse items, that required any manufacturing process or services – laser cutting, welding, painting.'
    },
    {
      title: 'Assemblies',
      description: 'Type of warehouse items, that include other items after manufacturing process – welding frames, screwed together parts.'
    },
    {
      title: 'Procurement chain',
      images: ['14.png'],
      description: 'All required information and all procurement processes, required for procure purchased items, from request till payment, presented in one window.'
    },
    {
      title: 'Outsourcing chain',
      images: ['15.png'],
      description: 'All required information and all procurement processes, required for procure outsourcing items, from request till payment, presented in one window.'
    },
    {
      title: 'Sales chain',
      description: 'All required information and all processes, required for sales, presented in one window.'
    },
    {
      title: 'Delivery chain',
      description: 'All required information and all processes, required for delivery products to customers, presented in one window.'
    },
    {
      title: 'Shipment request',
      description: 'List of products, required for preparationin warehouse for sending to customer, formed throw delivery chain.'
    },
    {
      title: 'Tools/equipment requests',
      images: ['16.png'],
      description: 'Request to warehouse with required to prepare and bring to current user items from stock.'
    },
    {
      title: 'Physical inventory',
      description: 'The process of bringing the number of warehouse items up to date.'
    },
    {
      title: 'Warehouse locator',
      images: ['17.png'],
      description: 'Storage place with specific coordinates.'
    },
    {
      title: 'Isolator',
      images: ['18.png'],
      description: 'Specific place in warehouse with items, canceled by QC process and require special decision about next processing.'
    },
    {
      title: 'Root assembly',
      images: ['19.png'],
      description: 'Finish assembly for current production plan.'
    },
    {
      title: 'Subassembly',
      images: ['20.png'],
      description: 'Assembly, placed inside of other assembly.'
    },
    {
      title: 'Parent assembly',
      images: ['21.png'],
      description: 'Assembly, consist other assembly inside themselves.'
    },
    {
      title: 'Rework',
      images: ['22.png'],
      description: 'The process of repairing or additional manufacturing with order, that was sended back from QC process or from isolator.'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.glossary.sort((a, b) => a.title.localeCompare(b.title));
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

  onSelectItem(item: GlossaryItem) {
    if (this.selectedItem && this.selectedItem.title === item.title) {
      this.selectedItem = null;
      return;
    }

    this.selectedItem = item;
    setTimeout(() => this.openingImage());
  }
}
