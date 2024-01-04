import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsComponent } from '../../../shared/steps/steps.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'servicios-reserva-bautizmo',
  standalone: true,
  imports: [CommonModule, StepsComponent, FormsModule],
  templateUrl: './reserva-bautizmo.component.html',
  styleUrl: './reserva-bautizmo.component.css'
})


export default class ReservaBautizmoComponent {

  public valorStep1: boolean = false;
  public valorStep2: boolean = false;
  public valorStep3: boolean = false;
  public valorStep4: boolean = false;

  public whatStep: number = 1;



  onCheck() {
    this.valorStep1 = !this.valorStep1;
  }


  steps(){

    if( this.valorStep1 == true ){
      this.whatStep = 2;
    }else if( this.valorStep2 == true ){
      this.whatStep = 3;
    }else if( this.valorStep3 == true ){
      this.whatStep = 4;
    }

  }


}
