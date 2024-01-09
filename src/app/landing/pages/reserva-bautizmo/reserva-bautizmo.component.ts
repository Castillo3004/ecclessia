import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsComponent } from '../../../shared/steps/steps.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParroquiasService } from '../../services/parroquias.service';
import { Parroquia } from '../../interfaces/parroquia';
import { RouterModule } from '@angular/router';
import { ReservaBautismo } from '../../interfaces/reserva-bautismo';
import { ReservaBautizmoService } from '../../services/reserva-bautizmo.service';


@Component({
  selector: 'servicios-reserva-bautizmo',
  standalone: true,
  imports: [CommonModule, StepsComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reserva-bautizmo.component.html',
  styleUrl: './reserva-bautizmo.component.css'
})


export default class ReservaBautizmoComponent implements OnInit{



  private parroquiasService = inject( ParroquiasService );
  private reservaBautizmoService = inject( ReservaBautizmoService );
  public fb = inject( FormBuilder );


  public parroquias: Parroquia[] = [];




  ngOnInit(): void {
    this.traerParroquias();
  }


  traerParroquias(){
    this.parroquiasService.getParroquias().subscribe( parroquias => {
      this.parroquias = parroquias;
    })
  }


  // Step 1
  public parroquiaSeleccionada: string = '';

  seleccionarParroquia( parroquia: Parroquia ) {
    this.parroquiaSeleccionada = this.parroquiaSeleccionada === parroquia.id ? '' : parroquia.id;
    this.parroquiaBautismo = parroquia;
  }


  // Step 2
  public fechaHoraForm: FormGroup = this.fb.group({
    fecha: ['', Validators.required ],
    hora: [ 'Seleccione', Validators.required ]
  });

  registrarHoraFecha(){
    this.setWhatStep(3);
    console.log(this.fechaHoraForm.value);

  }



  // Step 3
  public datosBautizoForm: FormGroup = this.fb.group({
    nombreMama: ['', [ Validators.required, Validators.minLength(3) ]],
    nombrePapa: ['', [ Validators.required, Validators.minLength(3) ]],
    nombresBautizado: ['', [ Validators.required, Validators.minLength(3) ]],
    apellidosBautizado: ['', [ Validators.required, Validators.minLength(3) ]],
    fechaNacimiento: [null, [ Validators.required ] ],
    edadBautizado: ['', [ Validators.required, Validators.minLength(3) ]],
    nombrePadrino: ['', [ Validators.required, Validators.minLength(3) ]],
    nombreMadrina: ['', [ Validators.required, Validators.minLength(3) ]],
    celularReferencia: ['', [ Validators.required, Validators.minLength(3) ]],
    correoReferencia: ['', [ Validators.required, Validators.minLength(3) ]],
  })


  registrarDatosBautizo(){
    this.setWhatStep(4);
    this.guardarDatosReservaBautismo();
  }


  // Steps
  public whatStep: number = 1;

  setWhatStep(value: number) {
    this.whatStep = value;
  }



  private parroquiaBautismo!: Parroquia
  async guardarDatosReservaBautismo(){

    const datosReservaBautismo: ReservaBautismo = {
      idParroquia: this.parroquiaBautismo.id,
      nombreParroquia: this.parroquiaBautismo.nombreParroquia,
      imgParroquia: this.parroquiaBautismo.imgParroquia,
      fechaBautismo: this.fechaHoraForm.value.fecha,
      horaBautismo: this.fechaHoraForm.value.hora,
      nombreMama: this.datosBautizoForm.value.nombreMama ,
      nombrePapa: this.datosBautizoForm.value.nombrePapa ,
      nombresBautizado: this.datosBautizoForm.value.nombresBautizado ,
      apellidosBautizado: this.datosBautizoForm.value.apellidosBautizado ,
      fechaNacimientoBautizado: this.datosBautizoForm.value.fechaNacimiento ,
      edadBautizado: this.datosBautizoForm.value.edadBautizado ,
      nombrePadrino: this.datosBautizoForm.value.nombrePadrino ,
      nombreMadrina: this.datosBautizoForm.value.nombreMadrina ,
      celularReferencia: this.datosBautizoForm.value.celularReferencia ,
      correoReferencia: this.datosBautizoForm.value.correoReferencia
    }

    await this.reservaBautizmoService.addReservaBautismo( datosReservaBautismo ).then( () => {
      console.log('Registrado con Exito');
    });

  }


}
