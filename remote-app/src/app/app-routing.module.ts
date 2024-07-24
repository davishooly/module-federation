import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout-component/layout-component';

const routes: Routes = [
  {
    path: 'remote-app',
    component: LayoutComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'remote-app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
