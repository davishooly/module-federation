import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lists',
  },
  {
    path: 'lists',
    loadChildren: () => import('lists').then((m) => m.ListsModule),
  },
  {
    matcher: startsWith('remote-app'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      remoteName: 'remoteApp',
      exposedModule: './web-components',
      elementName: 'remote-element',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
