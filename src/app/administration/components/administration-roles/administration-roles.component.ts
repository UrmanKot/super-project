import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, iif, Observable, startWith, switchMap} from "rxjs";
import {filter, map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {QuerySearch} from "@shared/models/other";
import {Role} from "../../models/role";
import {RoleService} from "../../services/role.service";
import {MenuItem} from "primeng/api";
import {ModalService} from "@shared/services/modal.service";

@UntilDestroy()
@Component({
  selector: 'pek-administration-roles',
  templateUrl: './administration-roles.component.html',
  styleUrls: ['./administration-roles.component.scss']
})
export class AdministrationRolesComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Role',
    items: [
      {
        label: 'Edit Role',
        icon: 'pi pi-pencil',
        command: () => this.editRole()
      },
      {
        label: 'Edit Permissions',
        icon: 'pi pi-pencil',
        command: () => this.editPermissions()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeRole()
      }
    ]
  }];

  isLoading = true;
  currentPage = 1;

  selectedRole: Role = null;

  count = 0;

  isShowAll = false;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  query: QuerySearch[] = [];

  roles$: Observable<Role[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.roleService.getForPagination(this.query).pipe(
          tap(response => this.count = response.count),
          map(response => response.results),
          tap(() => this.isLoading = false),
          startWith([]),
          untilDestroyed(this)
        ),
        this.roleService.getRoles(this.query).pipe(
          tap(roles => this.count = roles.length),
          tap(() => this.isLoading = false),
          startWith([]),
          untilDestroyed(this)
        ),
      ),
    ),
    untilDestroyed(this)
  )


  constructor(
    private readonly roleService: RoleService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedRole = null;

    this.query = [];

    if (!this.isShowAll) {
      this.query.push({name: 'page', value: this.currentPage})
      this.query.push({name: 'paginated', value: true});
    }
  }

  onShowAll(value: boolean) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  paginate(event: any) {
    this.currentPage = event.page + 1;
    this.search$.next();
  }

  createRole() {
    this.roleService.createEditRoleModal('create').pipe(
      filter(Boolean),
      tap(() => this.search$.next())
    ).subscribe();
  }

  editRole() {
    this.roleService.createEditRoleModal('edit', this.selectedRole).pipe(
      filter(Boolean),
      tap(() => this.search$.next())
    ).subscribe();
  }

  editPermissions() {
    this.roleService.editRolePermissions(this.selectedRole).pipe(
      filter(Boolean),
      tap(() => this.search$.next())
    ).subscribe();
  }

  private removeRole() {
    this.modalService.confirm('danger').pipe(
      filter(Boolean),
    ).subscribe(() => {
      this.roleService.deleteRole(this.selectedRole).pipe(
        tap(() => this.search$.next())
      ).subscribe();
    })
  }
}
