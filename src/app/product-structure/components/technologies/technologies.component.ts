import {Component, OnInit} from '@angular/core';
import {ModalService} from '@shared/services/modal.service';
import {TechnologyService} from '../../services/technology.service';
import {Technology} from '../../models/technology';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'pek-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  technologies: Technology[] = [];
  selectedTechnology: Technology;
  isLoading = true;

  menuItems: MenuItem[] = [{
    label: 'Selected Technology',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditTechnology()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveTechnology()
      }
    ]
  }];

  constructor(
    private technologyService: TechnologyService,
    public modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies() {
    this.technologyService.get().subscribe(technologies => {
      this.technologies = technologies;
      this.isLoading = false;
    });
  }

  onAddTechnology() {
    this.technologyService.createEditTechnology('create').subscribe(technology => {
      if (technology) {
        this.technologies.unshift(technology);
      }
    });
  }

  onEditTechnology() {
    this.technologyService.createEditTechnology('edit', this.selectedTechnology).subscribe(technology => {
      if (technology) {
        const index = this.technologies.findIndex(t => t.id === this.selectedTechnology.id);
        this.technologies[index] = technology;
      }
    });
  }

  onRemoveTechnology() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.technologyService.delete(this.selectedTechnology).subscribe(() => {
          const index = this.technologies.findIndex(t => t.id === this.selectedTechnology.id);
          this.technologies.splice(index, 1);
          this.selectedTechnology = null;
        });
      }
    });
  }
}
