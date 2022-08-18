import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {AuthState} from './auth-state.enum';

@Injectable()
export class AuthGuard implements CanActivate {

  public loginPageUri = ['/login'];

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.getActualState().pipe(
      map(state => {
        return state === AuthState.LOGGED_IN ? true : this.router.createUrlTree(this.loginPageUri);
      }),
    );
  }
}
