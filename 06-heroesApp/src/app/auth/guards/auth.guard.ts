import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): boolean | Observable<boolean> => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAutenticationStatus()
    .pipe(
      // tap( (isAuthenticated) => console.log('IsAuthenticated: ', isAuthenticated)),
      tap ( isAuthenticated => {
        if ( !isAuthenticated ) router.navigateByUrl('auth/login');
      }),
    );
}

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
  // console.log('CanActivate');
  // console.log({ route, state });

  return checkAuthStatus();
};

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  // console.log('CanMatch');
  // console.log({ route, segments });

  return checkAuthStatus();
};
