# Routing to create multiple views in your application.

Angular Routing allows to create a single-page application with multiple views.
It allows navigation between views.
Users can switch between these views.

```ts
----------------
# app.module.ts
----------------
// Load 2 components: ComponentOne & ComponentTwo
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```ts
-------------------------
# app.routing.module.ts
-------------------------
const routes: Routes = [
  { path: 'one', component: OneComponent, canActivate: [AuthGuard] },
  { path: 'two', component: TwoComponent, canActivate: [AuthGuard] },
];

@NgModule({
// Creates and configures a module with all the router providers and directives.
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}

```

```ts
# auth-guard.service.ts
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
```

```ts
--------------------
# app.component.ts
--------------------
<a routerLink="/one" routerLinkActive="active">Component One</a>
<a routerLink="/two" routerLinkActive="active">Component Two</a>

<!-- RENDER THE ROUTE (ROUTER OUTLET) -->
<router-outlet></router-outlet>
```
