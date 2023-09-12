import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, take, tap} from 'rxjs/operators';
import {environment} from '@env/environment';
import {AuthState} from './auth-state.enum';
import {User, UserPermissions} from '../administration/models/user';

export class AuthResponse {
  access: string;
  refresh: string;
}

export class AuthStateObject {
  state: AuthState;
  user: User;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  readonly #onAuth$ = new BehaviorSubject<AuthStateObject>({
    state: AuthState.PENDING,
    user: undefined,
  });

  public onAuth$ = this.#onAuth$.pipe(
    debounceTime(0),
    distinctUntilChanged(),
  );

  public user: User = null;
  public userPermissions: UserPermissions = null;

  public error$: Subject<string> = new Subject<string>();
  API_URL = environment.base_url;
  readonly url = environment.users_url;


  constructor(
    private httpClient: HttpClient
  ) {
    setTimeout(() => {
      this.getMe().subscribe();
    });
  }

  get token(): string | null {
    return localStorage.getItem('access');
  }

  login(user: User): Observable<User> {
    return this.httpClient.post<{ data: AuthResponse }>(this.API_URL + 'token/', user).pipe(
      map(response => response.data),
      tap(this.setToken),
      switchMap(() => this.getMe()),
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: any): any {
    const message = error.error.data.detail;
    this.error$.next(message);
    return throwError(error);
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthentificated(): boolean {
    return !!this.token;
  }

  private setToken(response: AuthResponse | null): void {
    if (response) {
      localStorage.setItem('access', response.access);
      localStorage.setItem('refresh', response.refresh);
    } else {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    }
  }

  public getActualState(): Observable<AuthState> {
    return this.onAuth$.pipe(
      filter(({state}) => state !== AuthState.PENDING),
      take(1),
      map(({state}) => state),
    );
  }

  getMe(): Observable<User> {
    return this.httpClient.get<{ data: User }>(this.API_URL + this.url + 'get_me/')
      .pipe(
        map(response => response.data),
        tap(user => this.setState(user)),
      );
  }

  setState(user: User) {
    this.user = user;
    if (this.user) {
      this.getUserPermissions();
    }

    this.#onAuth$.next({
      state: this.user ? AuthState.LOGGED_IN : AuthState.LOGGED_OUT,
      user: this.user,
    });
  }

  getUserPermissions() {
    this.userPermissions = {
      can_edit_product_structure: this.user.can_edit_product_structure,
      can_edit_confirmation: this.user.can_edit_confirmation,
      can_edit_warehouse: this.user.can_edit_warehouse,
      can_edit_manufacturing_procurement: this.user.can_edit_manufacturing_procurement,
      can_edit_quality_control: this.user.can_edit_quality_control,
      can_edit_manufacturing: this.user.can_edit_manufacturing,
      can_edit_contacts_and_events: this.user.can_edit_contacts_and_events,
      can_edit_outsourcing: this.user.can_edit_outsourcing,
      can_edit_purchase: this.user.can_edit_purchase,
      can_edit_sales: this.user.can_edit_sales,
      can_edit_reports: this.user.can_edit_reports,
      can_edit_administration: this.user.can_edit_administration,
    };
  }
}
