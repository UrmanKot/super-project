import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ProductPrefix} from '../../models/prefix';
import {ModalService} from '@shared/services/modal.service';
import {PrefixService} from '../../services/prefix.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-prefixes',
  templateUrl: './prefixes.component.html',
  styleUrls: ['./prefixes.component.scss']
})
export class PrefixesComponent implements OnInit, OnDestroy {
  prefixes: ProductPrefix[] = [];
  selectedPrefix: ProductPrefix;
  isLoading = true;

  constructor(
    private prefixService: PrefixService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.getPrefixes();
  }

  menuItems: MenuItem[] = [{
    label: 'Selected Prefix',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditPrefix()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemovePrefix()
      }
    ]
  }];

  private destroy$ = new Subject();

  getPrefixes() {
    this.prefixService.get().subscribe(prefixes => {
      this.prefixes = prefixes;
      this.isLoading = false;
    });
  }

  onAddPrefix() {
    this.prefixService.createEditPrefix('create').pipe(
      takeUntil(this.destroy$)
    ).subscribe(prefix => {
      if (prefix) {
        this.prefixes.unshift(prefix);
      }
    });
  }

  onEditPrefix() {
    this.prefixService.createEditPrefix('edit', this.selectedPrefix).subscribe(prefix => {
      if (prefix) {
        const index = this.prefixes.findIndex(t => t.id === this.selectedPrefix.id);
        this.prefixes[index] = prefix;
      }
    });
  }

  onRemovePrefix() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.prefixService.delete(this.selectedPrefix.id).subscribe(() => {
          const index = this.prefixes.findIndex(t => t.id === this.selectedPrefix.id);
          this.prefixes.splice(index, 1);
          this.selectedPrefix = null;
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
