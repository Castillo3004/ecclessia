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

      let numBarrios = 0;
      let numTemplos = 0;

      for(const parroquia of this.parroquias ){

        let barrios = parroquia.barrios;
        let capillas = parroquia.capillas;

        for(const capilla in capillas){
          numTemplos++;
        }

        for(const barrio in barrios){
          numBarrios++;
        }

        let numSacerdotes = parseInt(parroquia.numeroSacerdotes);
        this.totalSacerdotes += numSacerdotes;

      }

      this.totalTemplos = numTemplos;
      this.totalBarrios = numBarrios;

      this.actualizarEstadisticas();


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
