import { Component } from '@angular/core';
@Component({
  selector: 'calcular-area',
  templateUrl:'./calculate.component.html'
})

export class calcularAreaComponent {
  base: string = "";
  altura: string = "";
  resultado: string | number = "";

  calcularArea(base: string, altura: string) {
    const result = parseInt(base) * parseInt(altura);
    this.resultado = isNaN(result) ? "ingrsa valores correctos" : result;
  }
}