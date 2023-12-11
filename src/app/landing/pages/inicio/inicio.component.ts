import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasComponent } from '../../components/estadisticas/estadisticas.component';
import { TestimoniosComponent } from '../../components/testimonios/testimonios.component';
import { ReservaBautismoComponent } from '../../components/reserva-bautismo/reserva-bautismo.component';
import { InformacionParroquiaComponent } from '../../components/informacion-parroquia/informacion-parroquia.component';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { ContactanosComponent } from '../../components/contactanos/contactanos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    EstadisticasComponent,
    TestimoniosComponent,
    ReservaBautismoComponent,
    InformacionParroquiaComponent,
    GaleriaComponent,
    ContactanosComponent,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {

}
