import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout-component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
