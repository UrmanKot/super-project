import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Technology} from '../../../product-structure/models/technology';
import {TechnologyService} from '../../../product-structure/services/technology.service';

@Component({
  selector: 'pek-technology-picker',
  templateUrl: './technology-picker.component.html',
  styleUrls: ['./technology-picker.component.scss']
})
export class TechnologyPickerComponent implements OnInit {
  @Output() selectTechnology: EventEmitter<number> = new EventEmitter<number>();
  @Input() isDisabled: boolean = false;
  @Input() acceptedTechnologyIds: number[] = [];

  selectTechnologyId: number;

  isLoading = true;
  technologies: Technology[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly technologyService: TechnologyService,
  ) {
  }

  ngOnInit(): void {
    this.getTechnologies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('acceptedTechnologyIds' in changes) {
      this.filterTechnologies();
    }
  }

  filterTechnologies() {
    if (this.acceptedTechnologyIds.length > 0) {
      let newTechnologies: Technology[] = [];

      this.acceptedTechnologyIds.forEach(id => {
        newTechnologies = [...newTechnologies, ...this.technologies.filter(w => w.id === id)];
      });

      this.technologies = [...newTechnologies];
    }
  }

  getTechnologies() {
    this.technologyService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(technologies => {
      this.technologies = technologies;
      this.filterTechnologies();
      this.isLoading = false;
    });
  }

  onSelectTechnology() {
    this.selectTechnology.emit(this.selectTechnologyId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
