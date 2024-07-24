import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout-component/layout-component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      {
        path: 'shell-app/link-testing',
        loadChildren: () => import('./bundles').then((m) => m.TestingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
