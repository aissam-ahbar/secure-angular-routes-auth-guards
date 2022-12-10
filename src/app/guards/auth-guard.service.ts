import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Rx';

export class UserToken {}

export class Permissions {
  canActivate(user: any, routeId: string): boolean {
    return true;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private permissions: Permissions,
    private currentUser: UserToken
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.permissions.canActivate(this.currentUser, route.params['id']);
  }
}
