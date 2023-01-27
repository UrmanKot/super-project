import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {TechnologyService} from '../../../product-structure/services/technology.service';
import {Technology} from '../../../product-structure/models/technology';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-multi-technology-picker',
  templateUrl: './multi-technology-picker.component.html',
  styleUrls: ['./multi-technology-picker.component.scss']
})
export class MultiTechnologyPickerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() currentTechnologiesIds: number[] = [];
  @Output() selectTechnologies: EventEmitter<Technology[]> = new EventEmitter<Technology[]>();

  isLoading = true;
  technologies: Technology[] = [];
  selectedTechnologies: Technology[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly technologyService: TechnologyService
  ) {
  }

  ngOnInit(): void {
    this.technologyService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(technologies => {
      this.technologies = technologies;
      this.findTechnologies();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentTechnologiesIds' in changes) {
      this.selectedTechnologies = [];
      this.findTechnologies();
    }
  }

  onSelectTechnologies(technologies: Technology[]) {
    if (technologies) {
      this.selectTechnologies.emit(technologies);
    } else {
      this.selectTechnologies.emit(null);
    }
  }

  findTechnologies() {
    if (this.currentTechnologiesIds.length > 0) {
      this.currentTechnologiesIds.forEach(id => {
        const findTechnology = this.technologies.find(t => t.id === id);

        if (findTechnology) {
          this.selectedTechnologies.push(findTechnology);
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
