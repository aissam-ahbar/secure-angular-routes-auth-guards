import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OneComponent } from './one/one.component';

// Load a component for each route.
const routes: Routes = [{ path: 'one', component: OneComponent }];

@NgModule({
  // Creates and configures a module with all the router providers and directives.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
