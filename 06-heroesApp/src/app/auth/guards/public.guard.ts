import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { Observable, tap, map } from 'rxjs';


const checkAuthStatus = (): boolean | Observable<boolean> => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAutenticationStatus()
    .pipe(
      tap ( isAuthenticated => {
        if ( isAuthenticated ) router.navigateByUrl('/');
      }),
      map( isAuthenticated => !isAuthenticated )
    );
}

export const canActivateAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
  return checkAuthStatus();
};
