import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Subscription, throwError} from 'rxjs';

@Component({
  selector: 'pek-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  private errorSub: Subscription;
  public errorMessage: string;

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.errorSub = this.auth.error$.subscribe(error => this.errorMessage = error);
  }

  login() {
    const user = this.loginForm.value;
    this.auth.login(user).subscribe(
      () => {
        this.router.navigateByUrl('/').then();
      },
      (error => throwError(error))
    );
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
