import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentosRoutingModule } from './descuentos-routing.module';
import { DescuentosPageComponent } from './pages/descuentos-page/descuentos-page.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    DescuentosPageComponent
  ],
  imports: [
    CommonModule,
    DescuentosRoutingModule,
    SwiperModule
  ]
})
export class DescuentosModule { }
