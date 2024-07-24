import { NgModule } from '@angular/core';
import { ListsComponent } from './lists.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
  },
];

@NgModule({
  declarations: [ListsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [ListsComponent],
})
export class ListsModule {}
