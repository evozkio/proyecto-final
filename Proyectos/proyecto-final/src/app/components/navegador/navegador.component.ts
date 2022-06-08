import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent  {

  moverScroll(posicion:number){
    let primer = document.getElementById('primer-elemento');
    let alto = 0
    if (primer){
      alto = primer.offsetHeight;
    }
    window.scrollTo({
      top: posicion*alto,
      behavior: 'smooth',
    })
  }
}
