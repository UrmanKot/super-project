import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../../crm/models/company";
import {NomenclatureService} from "@shared/services/nomenclature.service";
import {CompanyService} from "../../../crm/services/company.service";
import {BaseServicesService} from "../../../procurement/services/base-services.service";
import {TechnologyService} from "../../../product-structure/services/technology.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pek-edit-invoice-generate-xml',
  templateUrl: './edit-invoice-generate-xml.component.html',
  styleUrls: ['./edit-invoice-generate-xml.component.scss']
})
export class EditInvoiceGenerateXmlComponent implements OnInit {

  id: string;
  errorMessage: string;
  title: string;

  company: Company;

  form: FormGroup = this.fb.group({
    value: [null],
  });

  numberPattern = /\d+/g;
  isSaving = false;

  constructor(
    private readonly companiesService: CompanyService,
    private readonly nomenclatureService: NomenclatureService,
    private readonly baseServicesService: BaseServicesService,
    private readonly technologiesService: TechnologyService,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<EditInvoiceGenerateXmlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { error },
  ) { }

  ngOnInit(): void {
    this.errorMessage = this.data.error.error;
    this.getMessage();
  }

  getMessage() {
    if (this.errorMessage.includes('NO_TAX_NUMBER')) {
      this.id = this.errorMessage.match(this.numberPattern).join('');

      this.companiesService.getById(+this.id).subscribe(company => {
        this.title = `Company "${company.name}" NO TAX NUMBER`;
      });
    }

    if (this.errorMessage.includes('NO_NOMENCLATURE_NUMBER')) {
      this.id = this.errorMessage.match(this.numberPattern).join('');

      this.nomenclatureService.getById(+this.id).subscribe(nomenclature => {
        this.title = `Nomenclature "(${nomenclature.code}) ${nomenclature.name}" NO ACCOUNTING NUMBER`;
      });
    }

    if (this.errorMessage.includes('NO_AUXILIARY_INVOICE_NUMBER')) {
      this.id = this.errorMessage.split(' ')[2].match(this.numberPattern).join('');

      this.baseServicesService.getById(this.id).subscribe(invoice => {
        this.title = `Auxiliary Invoice "${invoice.name}" NO ACCOUNTING NUMBER`;
      });
    }

    if (this.errorMessage.includes('NO_COMPANY_NUMBER')) {
      this.id = this.errorMessage.match(this.numberPattern).join('');

      this.companiesService.getById(+this.id).subscribe(company => {
        this.company = company;
        this.title = `Company "${company.name}" NO ACCOUNTING NUMBER`;
      });
    }

    if (this.errorMessage.includes('NO_TECHNOLOGY_NUMBER')) {
      this.id = this.errorMessage.match(this.numberPattern).join('');

      this.technologiesService.getById(this.id).subscribe(technology => {
        this.title = `Technology "${technology.name}" NO ACCOUNTING NUMBER`;
      });
    }

    if (this.errorMessage.includes('NO_NOMENCLATURE_COUNTRY')) {
      this.id = this.errorMessage.match(this.numberPattern).join('');

      this.nomenclatureService.getById(+this.id).subscribe(nomenclature => {
        this.title = `Nomenclature "${nomenclature.name}" NO COUNTRY OF ORIGIN`;
      });
    }

    if (this.errorMessage.includes('NO_NOMENCLATURE_TARIFF_CODE')) {
      this.id = this.errorMessage.match(this.numberPattern).join('');

      this.nomenclatureService.getById(+this.id).subscribe(nomenclature => {
        this.title = `Nomenclature "${nomenclature.name}" NO TARIFF CODE`;
      });
    }
  }

  send() {
    this.isSaving = true;

    if (this.errorMessage.includes('NO_TAX_NUMBER')) {
      const send = {
        tax_number: this.form.get('value').value
      };

      this.companiesService.addTaxNumber(send, this.id).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => {
        this.dialogRef.close(true);
      });
    }

    if (this.errorMessage.includes('NO_NOMENCLATURE_NUMBER')) {
      const send = {
        id: this.id,
        accounting_number: this.form.get('value').value
      };

      this.nomenclatureService.updateAccountingNumber(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => {
        this.dialogRef.close(true);
      });
    }

    if (this.errorMessage.includes('NO_AUXILIARY_INVOICE_NUMBER')) {
      const send = {
        accounting_number: this.form.get('value').value
      };

      this.baseServicesService.update(send, +this.id).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe( () => this.dialogRef.close(true));
    }

    if (this.errorMessage.includes('NO_COMPANY_NUMBER')) {
      const send = {
        id: this.id,
        accounting_number: this.form.get('value').value,
        contact_persons: [],
        categories: this.company.categories.map(c => c.id),
      };

      this.companiesService.updateAccountingNumber(<any>send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => this.dialogRef.close(true));
    }

    if (this.errorMessage.includes('NO_TECHNOLOGY_NUMBER')) {
      const send = {
        id: parseInt(this.id, 10),
        accounting_number: this.form.get('value').value,
      };

      this.technologiesService.editAccountingNumber(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => this.dialogRef.close(true));
    }

    if (this.errorMessage.includes('NO_NOMENCLATURE_COUNTRY')) {
      const send = {
        id: parseInt(this.id, 10),
        country_of_origin: this.form.get('country_of_origin').value,
      };

      this.nomenclatureService.updateCountryOfOrigin(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(
        () => this.dialogRef.close(true)
      );
    }

    if (this.errorMessage.includes('NO_NOMENCLATURE_TARIFF_CODE')) {
      const send = {
        id: parseInt(this.id, 10),
        tariff_code: this.form.get('tariff_code').value,
      };

      this.nomenclatureService.updateTariffCode(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(
        () => this.dialogRef.close(true)
      );
    }
  }

}
