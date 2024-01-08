import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsComponent } from '../../../shared/steps/steps.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParroquiasService } from '../../services/parroquias.service';
import { Parroquia } from '../../interfaces/parroquia';


@Component({
  selector: 'servicios-reserva-bautizmo',
  standalone: true,
  imports: [CommonModule, StepsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './reserva-bautizmo.component.html',
  styleUrl: './reserva-bautizmo.component.css'
})


export default class ReservaBautizmoComponent implements OnInit{


  private parroquiasService = inject( ParroquiasService );
  public fb = inject( FormBuilder );


  public parroquias: Parroquia[] = [];
  public parroquiaSeleccionada: string = '';


  public fechaHoraForm: FormGroup = this.fb.group({
    fecha: ['', Validators.required ],
    hora: [ 'Choose a country', Validators.required ]
  });



  ngOnInit(): void {
    this.traerParroquias();
  }


  traerParroquias(){
    this.parroquiasService.getParroquias().subscribe( parroquias => {
      this.parroquias = parroquias;
    })
  }


  // Step 1
  seleccionarParroquia( parroquia: Parroquia ) {
    this.parroquiaSeleccionada = this.parroquiaSeleccionada === parroquia.id ? '' : parroquia.id;

  }


  // Step 2
  registrarHoraFecha(){
    this.steps()
    console.log(this.fechaHoraForm.value);

  }


  public valorStep3: boolean = false;
  public valorStep4: boolean = false;

  public whatStep: number = 3;



  steps(){

    if( this.parroquiaSeleccionada !== '' ){
      this.whatStep = 2;
    }
    if( this.fechaHoraForm.valid ){
      this.whatStep = 3;
    }
    if( this.valorStep3 == true ){
      this.whatStep = 4;
    }

  }


}
