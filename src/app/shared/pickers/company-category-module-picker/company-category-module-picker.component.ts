import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {CompanyCategoryModule} from '../../../crm/models/company-category';
import {CompanyCategoryService} from '../../../crm/services/company-category.service';
import {Technology} from '../../../product-structure/models/technology';

@Component({
  selector: 'pek-company-category-module-picker',
  templateUrl: './company-category-module-picker.component.html',
  styleUrls: ['./company-category-module-picker.component.scss']
})
export class CompanyCategoryModulePickerComponent implements OnInit {
  @Input() currentModulesIds: number[] = [];
  @Output() selectModule: EventEmitter<CompanyCategoryModule[]> = new EventEmitter<CompanyCategoryModule[]>();

  isLoading = true;
  modules: CompanyCategoryModule[] = [];
  selectedModules: CompanyCategoryModule[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly companyCategoryService: CompanyCategoryService,
  ) {
  }

  ngOnInit(): void {
    this.companyCategoryService.getModules().pipe(
      takeUntil(this.destroy$)
    ).subscribe(modules => {
      this.modules = modules;
      this.findModules();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentModulesIds' in changes) {
      this.selectedModules = [];
      this.findModules();
    }
  }

  onSelectModule(technologies: CompanyCategoryModule[]) {
    this.selectModule.emit(technologies);
  }

  findModules() {
    if (this.currentModulesIds.length > 0) {
      this.currentModulesIds.forEach(id => {
        const findModule = this.modules.find(t => t.id === id);
        console.log(this.modules)
        console.log(id);

        console.log(findModule);

        if (findModule) {
          this.selectedModules.push(findModule);
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
