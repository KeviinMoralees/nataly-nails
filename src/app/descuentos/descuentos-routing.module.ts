import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescuentosPageComponent } from './pages/descuentos-page/descuentos-page.component';

const routes: Routes = [
  {
     path: '',
     component: DescuentosPageComponent,
    //  children: [
    //  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescuentosRoutingModule { }
