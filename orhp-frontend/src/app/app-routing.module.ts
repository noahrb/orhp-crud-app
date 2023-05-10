import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudExampleComponent } from './components/crud-example/crud-example.component';

const routes: Routes = [
  { path: 'crud-example', component: CrudExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
