import {Component, OnInit} from '@angular/core';
import {NavigationLink} from "../../../layout/navigation-route";
import {ProductStructureCategoryService} from "../../../product-structure/services/product-structure-category.service";

@Component({
  selector: 'pek-administration-layout',
  templateUrl: './administration-layout.component.html',
  styleUrls: ['./administration-layout.component.scss']
})
export class AdministrationLayoutComponent implements OnInit {
  routes: NavigationLink[] = [
    {label: 'User List', commands: ['user-list']},
    {label: 'Roles', commands: ['roles']},
    {label: 'Sales Chain', isClicked: true},
  ];

  constructor(
    private productStructureCategoryService: ProductStructureCategoryService,
  ) {
  }

  ngOnInit(): void {
  }

  onEditSalesChains() {
    this.productStructureCategoryService.editSalesChains()
  }

  edit(event: NavigationLink) {
    this.onEditSalesChains();
  }
}
