import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonio } from '../../interfaces/testimonios';
import { TestimoniosService } from '../../services/testimonios.service';


@Component({
  selector: 'landing-component-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent implements OnInit{

  private readonly testimoniosService = inject( TestimoniosService );

  public testimonios: Testimonio[] = [];



  ngOnInit(): void {
    this.traerTestimonios();
  }


  traerTestimonios(){
    this.testimoniosService.getTestimonios().subscribe( testimonios => {
      this.testimonios = testimonios;
    })
  }




  // public testimonios: Testimonio[] = [
  //   {
  //     autor: 'Odalis Morales',
  //     cargo: 'Usuario',
  //     imgAutor: 'https://i.pinimg.com/474x/72/f2/3e/72f23e82040f71e4b12fa640eb3605bc.jpg',
  //     mensaje: 'Estoy encantado con Eclessia, ya que ha simplificado la reserva de matrimonios en la iglesia. Antes, era un proceso complicado, pero ahora, con unos pocos clics en la página, puedo realizar la reserva de manera rápida y fácil desde casa. ¡Una herramienta que ha hecho mi vida mucho más sencilla!',
  //   },
  //   {
  //     autor: 'Mercedes Galindo',
  //     cargo: 'Usuario',
  //     imgAutor: 'https://img.freepik.com/foto-gratis/retrato-mujer-americana_53876-148185.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701475200&semt=ais',
  //     mensaje: 'Descubrí Eclessia cuando buscaba información sobre los horarios de misa en mi parroquia. Esta plataforma ha hecho que esa tarea sea extremadamente fácil. Ahora, puedo consultar los horarios actualizados de misa en cualquier momento y lugar. ¡Una solución conveniente que ha mejorado mi experiencia en la iglesia!',
  //   },
  // ]

}
