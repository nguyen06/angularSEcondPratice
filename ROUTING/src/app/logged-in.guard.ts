import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import {Observable } from 'rxjs/observable';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean  {
        const isLoggedIn = this.authService.isLoggedIn();
        console.log('canActive', isLoggedIn);
        return isLoggedIn;
    }
}