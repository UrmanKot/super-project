import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BehaviorSubject, iif, Observable, switchMap} from "rxjs";
import {QuerySearch} from "@shared/models/other";
import {AdapterService} from "@shared/services/adapter.service";
import {User} from "../../models/user";
import {debounceTime, filter, map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {UserService} from "../../services/user.service";
import {Paginator} from "primeng/paginator";
import {MenuItem} from "primeng/api";
import {ModalService} from "@shared/services/modal.service";

@UntilDestroy()
@Component({
  selector: 'pek-administration-user-list',
  templateUrl: './administration-user-list.component.html',
  styleUrls: ['./administration-user-list.component.scss']
})
export class AdministrationUserListComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  searchForm: FormGroup = this.fb.group({
    username: [''],
    email: [''],
    first_name: [''],
    last_name: [''],
  });

  menuItems: MenuItem[] = [{
    label: 'Selected User',
    items: [
      {
        label: 'Edit User',
        icon: 'pi pi-user-edit',
        command: () => this.editUser()
      },
      {
        label: 'Edit Permissions',
        icon: 'pi pi-pencil',
        command: () => this.editUserPermissions()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeUser()
      }
    ]
  }];

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  isLoading = true;
  count = 0;

  isStartFirstPage = false;
  isShowAll = false;

  selectedUser: User = null;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  query: QuerySearch[] = [];

  users$: Observable<User[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.userService.getForPagination(this.query).pipe(
          tap(response => this.count = response.count),
          map(response => response.results),
        ),
        this.userService.get(this.query).pipe(
          tap(users => this.count = users.length),
        ),
        // this.userService.get(this.query).pipe(
        //   tap(users => this.ordersCount = users.length),
        // )
      ),
    ),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly userService: UserService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(
      debounceTime(150),
      untilDestroyed(this)
    ).subscribe(() => this.search$.next())
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedUser = null;

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true});
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value) {
        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });
      }
    }
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onShowAll(value: boolean) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  createUser() {
    this.userService.createEditUserModal('create').pipe(
      filter(Boolean),
      tap(() => this.search$.next())
    ).subscribe();
  }

  editUser() {
    this.userService.createEditUserModal('edit', this.selectedUser).pipe(
      filter(Boolean),
      tap(() => this.search$.next())
    ).subscribe();
  }

  editUserPermissions() {
    this.userService.editUserRoles(this.selectedUser).pipe(
      filter(Boolean),
      tap(() => this.search$.next())
    ).subscribe();
  }

  private removeUser() {
    this.modalService.confirm('danger').pipe(
      filter(Boolean),
    ).subscribe(() => {
      this.userService.deleteUser(this.selectedUser).pipe(
        tap(() => this.search$.next())
      ).subscribe();
    })
  }
}
