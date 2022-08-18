import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationLink, NavigationRoutes} from './navigation-route';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'pek-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() toggleNavigationVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();
  isNavigationHidden: boolean = false;

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'icon-dashboard',
      routerLink: '/dashboard',
    }, {
      label: 'Product Structure',
      routerLink: 'product-structure',
      command: () => this.test(),
      icon: 'icon-product-structure',
      items: [
        {
          label: 'Products',
          routerLink: '/product-structure/products',
        },
        {
          label: 'Technologies',
          routerLink: '/product-structure/technologies',
        },
        {
          label: 'Prefixes',
          routerLink: '/product-structure/prefixes',
        },
      ],
    }, {
      label: 'Confirmation',
      icon: 'icon-confirmation',
      routerLink: '/confirmation',
      command: () => this.test(),
      items: [
        {label: 'Nomenclature Confirmation',routerLink: '/confirmation/nomenclature'},
        {label: 'Payment Confirmation', routerLink: '/confirmation/payment'},
        {label: 'Write Off Confirmation', routerLink: '/confirmation/prefixes'},
        {label: 'Production Lists Confirmation', routerLink: '/confirmation/prefixes'},
        {label: 'Suppliers Confirmation', routerLink: '/confirmation/prefixes'},
      ]
    }, {
      label: 'Warehouse',
      icon: 'icon-warehouse',
      routerLink: '/any',
    }, {
      label: 'Manufacturing Procurement',
      icon: 'icon-manufacturing-procurement',
      styleClass: 'navigation__link-wrap',
      routerLink: '/any',
    }, {
      label: 'Quality Control',
      icon: 'icon-quality-control',
      routerLink: '/any',
    }, {
      label: 'Manufacturing',
      icon: 'icon-manufacturing',
      routerLink: '/any',
    }, {
      label: 'Contacts & Events',
      icon: 'icon-contacts-events',
      routerLink: '/any',
    }, {
      label: 'Outsourcing',
      icon: 'icon-outsourcing',
      routerLink: '/any',
    }, {
      label: 'Purchasing',
      icon: 'icon-purchasing',
      routerLink: '/any',
    }, {
      label: 'Sales',
      icon: 'icon-sales',
      routerLink: '/any',
    }, {
      label: 'Reports',
      icon: 'icon-reports',
      routerLink: '/any',
    }, {
      label: 'Administration',
      icon: 'icon-administration',
      routerLink: '/any',
    }
  ];

  routes: NavigationRoutes = [
    {
      label: 'Dashboard',
      commands: ['/any'],
      module: 'dashboard'
    },
    {
      label: 'Product Structure',
      commands: ['/product-structure'],
      module: 'product-structure',
      children: [
        {label: 'Products', commands: ['/product-structure/products']},
        {label: 'Technologies', commands: ['/product-structure/technologies']},
        {label: 'Prefixes', commands: ['/product-structure/prefixes']},
      ]
    },
    {
      label: 'Confirmation',
      commands: ['/confirmation'],
      module: 'confirmation',
      children: [
        {label: 'Nomenclature Confirmation', commands: ['/confirmation/nomenclature']},
        {label: 'Payment Confirmation', commands: ['/confirmation/payment']},
        {label: 'Write Off Confirmation', commands: ['/confirmation/prefixes']},
        {label: 'Production Lists Confirmation', commands: ['/confirmation/prefixes']},
        {label: 'Suppliers Confirmation', commands: ['/confirmation/prefixes']},
      ]
    },
    {
      label: 'Warehouse',
      commands: ['/any'],
      module: 'warehouse'
    },
    {
      label: 'Manufacturing Procurement',
      commands: ['/any'],
      module: 'manufacturing-procurement'
    },
    {
      label: 'Quality Control',
      commands: ['/any'],
      module: 'quality-control'
    },
    {
      label: 'Manufacturing',
      commands: ['/any'],
      module: 'manufacturing'
    },
    {
      label: 'Contacts & Events',
      commands: ['/any'],
      module: 'contacts-events'
    },
    {
      label: 'Outsourcing',
      commands: ['/any'],
      module: 'outsourcing'
    },
    {
      label: 'Purchasing',
      commands: ['/any'],
      module: 'purchasing'
    },
    {
      label: 'Sales',
      commands: ['/any'],
      module: 'sales'
    },
    {
      label: 'Reports',
      commands: ['/any'],
      module: 'reports'
    },
    {
      label: 'Administration',
      commands: ['/any'],
      module: 'administration'
    },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
  }

  test() {
    this.router.navigate([])
  }

  ngOnInit(): void {
    // const activeUrl = this.router.url.split('/').join('');
    //
    // this.routes.forEach(route => {
    //   if (route.children)
    //     route.children.forEach(routeChild => {
    //       const currentRouteChild = routeChild.commands[0].split('/').join('');
    //
    //       // if (currentRouteChild.includes(activeUrl) && activeUrl !== '') {
    //       //   route.active = true;
    //       // }
    //     });
    // });
  }

  onToggleNavigationVisibility() {
    this.isNavigationHidden = !this.isNavigationHidden;
    this.toggleNavigationVisibility.emit(this.isNavigationHidden);
  }
}
