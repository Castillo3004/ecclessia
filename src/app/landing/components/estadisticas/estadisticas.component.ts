import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParroquiasService } from '../../services/parroquias.service';
import { Parroquia } from '../../interfaces/parroquia';


interface EstadisticasItem {
  imgSvg: string;
  title: string;
  cantidad: number;
}

@Component({
  selector: 'landing-component-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent implements OnInit{

  private readonly parroquiasService = inject( ParroquiasService );

  public parroquias: Parroquia[] = [];
  public estadisticasItems!: EstadisticasItem[]


  public totalParroquias: number = 0;
  public totalSacerdotes: number = 0;
  public totalTemplos: number = 0;
  public totalBarrios: number = 0;


  calcularTotales(){
    this.parroquiasService.getParroquias().subscribe( parroquias => {
      this.parroquias = parroquias;
      this.totalParroquias = parroquias.length;

      for(const parroquia of this.parroquias ){
        let numBarrios = parseInt(parroquia.numeroBarrios);
        let numSacerdotes = parseInt(parroquia.numeroSacerdotes);
        let numTemplos = parseInt(parroquia.numeroCapillas)

        this.totalSacerdotes += numSacerdotes;
        this.totalTemplos += numTemplos;
        this.totalBarrios += numBarrios;
      }
      this.actualizarEstadisticas();
      // console.log( 'Total Parroquias: ' + this.totalParroquias);
      // console.log( 'Total Sacerdotes: ' + this.totalSacerdotes);
      // console.log( 'Total Templos: ' + this.totalTemplos);
      // console.log('Total Barrios: ' + this.totalBarrios);
    });
  }

  ngOnInit(): void {
    this.calcularTotales();
  }

  actualizarEstadisticas(){

    this.estadisticasItems = [
      {
        imgSvg: './../../../../assets/svg/estadisticas/parroquias.svg',
        title: 'Parroquias',
        cantidad: this.totalParroquias,
      },
      {
        imgSvg: './../../../../assets/svg/estadisticas/curas.svg',
        title: 'Sacerdotes',
        cantidad: this.totalSacerdotes,
      },
      {
        imgSvg: './../../../../assets/svg/estadisticas/iglesia.svg',
        title: 'Templos',
        cantidad: this.totalTemplos,
      },
      {
        imgSvg: './../../../../assets/svg/estadisticas/pastoral.svg',
        title: 'Barrios',
        cantidad: this.totalBarrios,
      },
    ]
  }




}
