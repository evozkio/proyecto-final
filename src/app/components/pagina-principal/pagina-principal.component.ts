import { Component} from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent {

  numero_seccion:number = 1

  actionMenu(numero:number){
    
    let cero = document.getElementById('pseudocodigo');
    let primero = document.getElementById('html');
    let segundo = document.getElementById('java');
    let tercero = document.getElementById('python');
    let cuarto = document.getElementById('angular');
    let quinto = document.getElementById('react');
    let sexto = document.getElementById('bbdd');

    if ( cero  && primero  && segundo && tercero && cuarto && quinto && sexto && this.numero_seccion != numero){
      cero.style.left = "30vw"
      primero.style.left = "30vw"
      segundo.style.left = "30vw"
      tercero.style.left = "30vw"
      cuarto.style.left = "30vw"
      quinto.style.left = "30vw"
      sexto.style.left = "30vw"
      cero.style.opacity = "0"
      primero.style.opacity = "0"
      segundo.style.opacity = "0"
      tercero.style.opacity = "0"
      cuarto.style.opacity = "0"
      quinto.style.opacity = "0"
      sexto.style.opacity = "0"
      setTimeout(() => {
        this.numero_seccion = numero;
      }, 500);
      setTimeout(() => {
        if (cero  && primero  && segundo && tercero && cuarto && quinto && sexto ) {
          cero.style.left = "0"
          cero.style.opacity = "1.0"
          primero.style.opacity = "1.0"
          segundo.style.left = "0"
          segundo.style.opacity = "1.0"
          tercero.style.left = "0"
          tercero.style.opacity = "1.0"
          cuarto.style.left = "0"
          cuarto.style.opacity = "1.0"
          quinto.style.left = "0"
          quinto.style.opacity = "1.0"
          sexto.style.left = "0"
          sexto.style.opacity = "1.0"
        }
      }, 600);
      
    }
  }
}
