import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(route: ActivatedRouteSnapshot) {
    // enable route one
    if (route?.routeConfig?.path == 'one') {
      return true;
    } else {
      // Block route two
      return false;
    }
  }
}
