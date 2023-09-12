import {Component, Input, OnInit} from '@angular/core';

export type Module = 'dashboard' | 'product-structure' | 'confirmation' | 'warehouse' | 'manufacturing-procurement'
  | 'quality-control' | 'manufacturing' | 'contacts-events' | 'outsourcing' | 'purchasing' | 'sales'
  | 'reports' | 'administration' | 'business-trip' | 'correspondents' | 'instruments' | 'delivery';

@Component({
  selector: 'pek-module-icon',
  templateUrl: './module-icon.component.html',
  styleUrls: ['./module-icon.component.scss']
})
export class ModuleIconComponent implements OnInit {
  @Input() module: Module;
  @Input() isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
