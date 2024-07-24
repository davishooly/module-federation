import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { LayoutModule } from './layout-component/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('remote-element', ce);
  }
}
