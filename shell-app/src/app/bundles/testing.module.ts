import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';


const routes: Routes = [ {
   path: '',
   component: TestingComponent
}]

@NgModule({
  declarations: [TestingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [TestingComponent],
})
export class TestingModule {}
