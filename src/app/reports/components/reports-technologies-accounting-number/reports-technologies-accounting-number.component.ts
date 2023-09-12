import {Component, OnInit, ViewChild} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';
import {filter} from 'rxjs/operators';
import {Technology} from "../../../product-structure/models/technology";
import {TechnologyService} from "../../../product-structure/services/technology.service";


@UntilDestroy()
@Component({
  selector: 'pek-reports-technologies-accounting-number',
  templateUrl: './reports-technologies-accounting-number.component.html',
  styleUrls: ['./reports-technologies-accounting-number.component.scss']
})
export class ReportsTechnologiesAccountingNumberComponent implements OnInit {

  @ViewChild('paginator') paginator: Paginator;

  technologiesCount = 0;
  isStartFirstPage = false;

  selectedTechnology: Technology;

  isLoading = true;
  technologies: Technology[] = [];


  constructor(
    private technologiesService: TechnologyService,
  ) {
  }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies() {
    this.technologiesService.get().subscribe(technologies => {
      this.technologies = technologies;
      this.isLoading = false;
    })
  }

  onEditTechnologyAccountingNumber() {
    this.technologiesService.editTechnologyAccountingNumber(this.selectedTechnology).pipe(
      filter(technology => !!technology)
    ).subscribe(technology => {
      const index = this.technologies.findIndex(t => t.id === technology.id);
      this.technologies[index].accounting_number = technology.accounting_number;
    });
  }
}
