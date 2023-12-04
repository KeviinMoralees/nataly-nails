import { Component } from '@angular/core';
import JSConfetti from 'js-confetti';
import SwiperCore, {Navigation, Pagination, EffectCoverflow, EffectCube} from 'swiper'


SwiperCore.use([Navigation,Pagination,EffectCoverflow, EffectCube])

@Component({
  selector: 'app-descuentos-page',
  templateUrl: './descuentos-page.component.html',
  styleUrls: ['./descuentos-page.component.css'],
})
export class DescuentosPageComponent {

  public flag1:boolean = true
  public flag2:boolean = false
  public flag3:boolean = false
  private jsconfetti = new JSConfetti();

  redimirCupon(){
    this.flag1 = false
    this.flag2 = true
    setTimeout(() => {
      this.flag2 = false
      this.flag3 = true
      this.jsconfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber:80,
        emojis: ['🌸'],
        confettiColors: [
          '#8e44ad', '#9b59b6', '#be90d4', '#7d3c98', '#a569bd', '#d2b4de',
        ],
      });
    }, 5000);
  }
}
