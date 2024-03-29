import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CompanyService} from '../../../crm/services/company.service';
import {TreeNode} from 'primeng/api';
import {Company} from '../../../crm/models/company';
import {CompanyCategoryService} from '../../../crm/services/company-category.service';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {CompanyCategory} from '../../../crm/models/company-category';
import {debounceTime, tap} from 'rxjs/operators';
import {logMessages} from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

@Component({
  selector: 'pek-company-categorized-multi-picker',
  templateUrl: './company-categorized-multi-picker.component.html',
  styleUrls: ['./company-categorized-multi-picker.component.scss']
})
export class CompanyCategorizedMultiPickerComponent implements OnInit, OnDestroy {
  nodes: any[];
  companyCategories: CompanyCategory[] = [];
  companies: Partial<Company>[] = [];
  @Input() currentCompaniesIds: number[] = [];
  @Output() selectCompanies: EventEmitter<string> = new EventEmitter<string>();

  groupedCategories: TreeNode<Company & CompanyCategory>[] = [];

  selectedNode: TreeNode[] = [];
  selectedUniqueNodes: TreeNode[] = [];
  isLoading = true;
  private destroy$ = new Subject();
  private dataCollected = new Subject();

  constructor(
    private readonly companyService: CompanyService,
    private readonly companyCategoryService: CompanyCategoryService,
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  formTree() {
    this.companyCategories.forEach(category => {
      const companiesOfCategory = this.companies.filter(company => company.categories.findIndex(id => id === category.id) > -1);
      const preparedCategory: TreeNode = {
        label: category.name,
        data: {category: category, type: 'category'},
        key: 'category' + category.id,
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: []
      }
      if (companiesOfCategory.length > 0) {
        companiesOfCategory
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          }).forEach(company => {
          const preparedCompany: TreeNode = {
            label: company.name,
            data: {company: company, type: 'company'},
            key: 'company' + company.id,
            children: [],
          }
          preparedCategory.children.push(preparedCompany);
        });
      }
      this.groupedCategories.push(preparedCategory)
    })
    this.nodes = this.groupedCategories;
    this.setSelectedNode();
    this.isLoading = false;
  }

  setSelectedNode() {
    const selectedCompanies: string[] = this.currentCompaniesIds.flatMap(id => 'company' + id?.toString()) as string[];

    this.selectedNode = this.nodes.flatMap(n => n.children)
      .filter(v => v?.key !== undefined && selectedCompanies.includes(v.key) &&
        this.selectedNode.findIndex(node => node.key === v.key) < 0) as TreeNode[];

    this.nodes.forEach(node => {
      const childCount = (node as TreeNode).children.length;
      let passedCount = 0;
      (node as TreeNode).children.forEach(child => {
        const isSelected = selectedCompanies.findIndex(id => id === (child as TreeNode).key) > -1;
        if (isSelected) {
          passedCount++;
        }
      });

      if (childCount > 0 && childCount === passedCount) {
        this.selectedNode.push(node as TreeNode);
      }
      if (childCount > 0 && passedCount > 0 && childCount > passedCount) {
        (node as TreeNode).partialSelected = true;
      }
    });
    this.selectedNode = [...this.selectedNode.filter(this.onlyUniqueByKey)];
  }

  getCategories() {
    return this.companyCategoryService.get().pipe(tap(categories => {
      this.companyCategories = categories;
      this.dataCollected.next(true);
    }), takeUntil(this.destroy$)).subscribe(() => {
      this.getCompanies();
    });
  }

  getCompanies() {
    return this.companyService.getShorts().pipe(tap(companies => {
      this.companies = companies;
      this.dataCollected.next(true);
      this.formTree();
    }), takeUntil(this.destroy$)).subscribe();
  }

  selectionChanged() {
    const selectedCompanies = this.selectedNode
      .filter(node => node.data.type === 'company').map(node => node.data.company).filter(this.onlyUnique);
    if (selectedCompanies?.length === 0) {
      this.selectCompanies.emit(null);
    } else {
      this.selectCompanies.emit(selectedCompanies.map(c => c.id).join(','));
    }
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  onlyUniqueByKey(value, index, self) {
    return self.findIndex(innerValue => innerValue.key === value.key) === index;
  }

  ngOnDestroy() {
    console.log('Destroy');
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
