import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, switchMap, tap} from 'rxjs/operators';
import {finalize, Subject, takeUntil} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AddEventModalType, Company} from '../../models/company';
import {CompanyService} from '../../services/company.service';
import {ModalService} from '@shared/services/modal.service';
import {MenuItem} from 'primeng/api';
import {ContactPersonService} from '../../services/contact-person.service';
import {ContactPerson} from '@shared/models/contact-person';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {CompanyFileService} from '../../services/company-file.service';
import {CompanyFile} from '../../models/company-file';
import {AdapterService} from '@shared/services/adapter.service';
import {CompanyActivity} from '../../models/company-activity';
import {EventCompanyService} from '../../services/event-company.service';
import {EventCompany} from '../../models/event-company';
import {environment} from '@env/environment';

@Component({
  selector: 'pek-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit, OnDestroy {

  link = environment.link_url + 'dash/';

  contactPersonMenuItems: MenuItem[] = [{
    label: 'Selected Contact Person',
    items: [
      {
        label: 'Contact Person Page',
        icon: 'pi pi-user',
        command: () => this.onGoContactPersonPage()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditContactPerson()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveContactPerson()
      }
    ]
  }];

  linkedCompanyMenuItems: MenuItem[] = [{
    label: 'Selected Linked Company',
    items: [
      {
        label: 'Contact Person Page',
        icon: 'pi pi-user',
        command: () => this.linkedGoContactPersonPage()
      },
      {
        label: 'Company Page',
        icon: 'pi pi-share-alt',
        command: () => this.linkedGoCompanyPage()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditLinkedCompany()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveLinkedCompany()
      }
    ]
  }];

  eventMenuItems: MenuItem[] = [{
    label: 'Selected Event',
    items: [
      {
        label: 'Done',
        icon: 'pi pi-check',
        command: () => this.onDoneEvent()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditEvent()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveEvent()
      }
    ]
  }];

  isRemoving = false;
  isPendingFile = false;

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  selectedContactPerson: ContactPerson;
  selectedLinkedCompany: Company;

  companyActivities: CompanyActivity[] = [];
  selectedCompanyActivity: CompanyActivity;

  invoices: Invoice[] = [];
  selectedInvoice: Invoice;

  files: CompanyFile[] = [];
  selectedFile: CompanyFile;

  isLoadingInvoice = true;
  isLoadingFiles = true;

  isLoading = true;
  companyId: number;
  company: Company;
  destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly companyService: CompanyService,
    private readonly contactPersonService: ContactPersonService,
    private readonly modalService: ModalService,
    private readonly invoiceService: InvoiceService,
    private readonly companyFileService: CompanyFileService,
    private readonly adapterService: AdapterService,
    private readonly eventCompanyService: EventCompanyService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.companyId = +id),
      tap(() => this.getInvoices()),
      tap(() => this.getFiles()),
      switchMap(id => this.companyService.getById(+id)),
      takeUntil(this.destroy$)
    ).subscribe(company => {
      this.company = company;

      this.companyActivities = company.activities;
      this.companyActivities.sort((a, b) => {
        const dateA = new Date(a.event.start);
        const dateB = new Date(b.event.start);
        // @ts-ignore
        return (dateB - dateA);
      });

      this.isLoading = false;
    });
  }

  getInvoices() {
    this.invoiceService.get([{
      name: 'supplier',
      value: this.companyId,
    }]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(invoices => {
        this.invoices = invoices;
        this.isLoadingInvoice = false;
      }
    );
  }

  getCompany() {
    this.companyService.getById(this.companyId).pipe(
      takeUntil(this.destroy$)
    ).subscribe(company => {
      this.company = company;

      if (this.selectedLinkedCompany) {
        this.selectedLinkedCompany = this.company.linked_companies.find(c => c.id === this.selectedLinkedCompany.id);
      }

      this.companyActivities = company.activities;
      this.companyActivities.sort((a, b) => {
        const dateA = new Date(a.event.start);
        const dateB = new Date(b.event.start);
        // @ts-ignore
        return (dateB - dateA);
      });

      if (this.selectedCompanyActivity) {
        this.selectedCompanyActivity = this.companyActivities.find(c => c.id === this.selectedCompanyActivity.id);
        this.onEventSelectionChange();
      }

      this.isLoading = false;
    });
  }

  onRemoveCompany() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.isRemoving = true;
        this.companyService.delete(this.companyId).subscribe(() => {
          this.router.navigate(['../../'], {relativeTo: this.route});
          this.isRemoving = false;
        });
      }
    });
  }

  onEditCompany() {
    this.companyService.createEditCompanyModal('edit', this.company).subscribe(company => {
      if (company) {

      }
    });
  }

  onAddContactPerson() {
    this.contactPersonService.createEditContactPersonModal(this.companyId, 'create').subscribe(contactPerson => {
      if (contactPerson) {
        this.company.contact_persons.push(contactPerson);
        this.company.contact_persons = this.company.contact_persons.map(c => c);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onEditContactPerson() {
    this.contactPersonService.createEditContactPersonModal(this.companyId, 'edit', this.selectedContactPerson).subscribe(contactPerson => {
      if (contactPerson) {
        const index = this.company.contact_persons.findIndex(c => c.id === contactPerson.id);
        this.company.contact_persons[index] = contactPerson;
        this.company.contact_persons = this.company.contact_persons.map(c => c);
      }
    });
  }

  onRemoveContactPerson() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.contactPersonService.delete(this.selectedContactPerson.id).subscribe(() => {
          const index = this.company.contact_persons.findIndex(c => c.id === this.selectedContactPerson.id);
          this.company.contact_persons.splice(index, 1);
          this.selectedContactPerson = null;
          this.company.contact_persons = this.company.contact_persons.map(c => c);
        });
      }
    });
  }

  onAddLinkedCompany() {
    this.companyService.createEditLinkedCompanyModal(this.companyId, 'create').subscribe(linkedCompany => {
      if (linkedCompany) {
        this.getCompany();
      }
    });
  }

  onEditLinkedCompany() {
    this.companyService.createEditLinkedCompanyModal(this.companyId, 'edit', this.selectedLinkedCompany).subscribe(linkedCompany => {
      if (linkedCompany) {
        this.getCompany();
      }
    });
  }

  onRemoveLinkedCompany() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.companyService.deleteLinkedCompany(this.selectedLinkedCompany.id)
          .subscribe(() => {
            const index = this.company.linked_companies.findIndex(c => c.id === this.selectedLinkedCompany.id);
            this.company.linked_companies.splice(index, 1);
            this.selectedLinkedCompany = null;
            this.company.linked_companies = this.company.linked_companies.map(c => c);
          });
      }
    });
  }

  goToInvoice() {
    const link = `${this.link}accounting/invoices/products/view/${this.selectedInvoice.id}`;
    window.open(link, '_blank');
  }

  onAddFile() {
    this.companyFileService.openAddFileModal(this.companyId).subscribe(file => {
      if (file) {
        this.files.push(file);
        this.files = this.files.map(f => f);
      }
    });
  }

  getFileName(name: string) {
    let nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }


  getFiles() {
    this.companyFileService.get([
      {name: 'company_id', value: this.companyId}
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    });
  }

  onDownloadFile(file: CompanyFile) {
    if (!this.isPendingFile) {
      this.isPendingFile = true;
      this.addition.add(file.id);
      this.companyFileService.downloadFile(file).pipe(
        finalize(() => {
          this.isPendingFile = false;
          this.addition.clear();
        })
      ).subscribe(response => {
        const filename = this.getFileName(file.file);
        this.adapterService.downloadFile(filename, response);
      });
    }
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);
        this.companyFileService.delete(id).pipe(
          finalize(() => {
            this.deletion.clear();
          })
        ).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
          this.selectedFile = null;
          this.files = this.files.map(f => f);
        });
      }
    });
  }

  onEventSelectionChange() {
    this.eventMenuItems[0].items[0].disabled = !!this.selectedCompanyActivity?.is_done;
  }

  onRemoveEvent() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventCompanyService.delete(this.selectedCompanyActivity.id).subscribe(() => {
          const index = this.companyActivities.findIndex(c => c.id === this.selectedCompanyActivity.id);
          this.companyActivities.splice(index, 1);
          this.selectedCompanyActivity = null;
        });
      }
    });
  }

  onDoneEvent() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.eventCompanyService.update(
          this.selectedCompanyActivity.id, {is_done: true} as EventCompany
        ).subscribe(event => {
          this.getCompany();
        });
      }
    });
  }

  onAddEventToCompany(type: AddEventModalType) {
    this.companyService.openAddEventToCompanyModal(type, this.company).subscribe(response => {
      if (response) {
        this.getCompany();
      }
    });
  }

  onEditEvent() {
    this.eventCompanyService.openEditCompanyActivityModal(this.selectedCompanyActivity).subscribe(event => {
      if (event) {
        this.getCompany();
      }
    });
  }

  onGoContactPersonPage() {
    this.router.navigate(['../../', 'contact-person', this.selectedContactPerson.id], {relativeTo: this.route});
    const link = `crm/business-partners/contact-person/${this.selectedContactPerson.id}`;
    window.open(link, '_blank');
  }

  linkedGoContactPersonPage() {
    const link = `crm/business-partners/contact-person/${this.selectedLinkedCompany.contact_person.id}`;
    window.open(link, '_blank');
  }

  linkedGoCompanyPage() {
    const link = `crm/business-partners/company-page/${this.selectedLinkedCompany.to_company.id}`;
    window.open(link, '_blank');
  }
}

// , OnDestroy

// destroy$ = new Subject();

// takeUntil(this.destroy$)

// ngOnDestroy() {
//   this.destroy$.next(true);
//   this.destroy$.complete();
// }
