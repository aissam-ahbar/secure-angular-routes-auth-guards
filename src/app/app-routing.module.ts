import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AuthGuard } from './guards/auth-guard.service';

// Load a component for each route.
const routes: Routes = [
  { path: 'one', component: OneComponent, canActivate: [AuthGuard] },
  { path: 'two', component: TwoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  // Creates and configures a module with all the router providers and directives.
  imports: [RouterModule.forRoot(routes)],
  // Providers guard services
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
