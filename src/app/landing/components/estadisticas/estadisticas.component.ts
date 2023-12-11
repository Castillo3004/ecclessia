import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface EstadisticasItem {
  imgSvg: string;
  title: string;
  porcentaje: number;
}

@Component({
  selector: 'landing-component-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

  public estadisticasItems: EstadisticasItem[] = [
    {
      imgSvg: './../../../../assets/svg/estadisticas/parroquias.svg',
      title: 'Parroquias',
      porcentaje: 123,
    },
    {
      imgSvg: './../../../../assets/svg/estadisticas/curas.svg',
      title: 'Sacerdotes',
      porcentaje: 123,
    },
    {
      imgSvg: './../../../../assets/svg/estadisticas/iglesia.svg',
      title: 'Templos',
      porcentaje: 123,
    },
    {
      imgSvg: './../../../../assets/svg/estadisticas/pastoral.svg',
      title: 'Pastorales',
      porcentaje: 123,
    },
  ]

}
