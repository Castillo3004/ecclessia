import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactanosService } from '../../services/contactanos.service';

@Component({
  selector: 'landing-component-contactanos',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {

  private fb = inject( FormBuilder );
  private contactanosService = inject( ContactanosService );


  public contactanosForm: FormGroup = this.fb.group({
    asunto: ['', [ Validators.required, Validators.minLength(3) ] ],
    tipo: ['', [ Validators.required, Validators.minLength(3) ] ],
    mensaje: ['', [ Validators.required, Validators.minLength(3) ] ],
  });


  async registrarContactanos(){
    const resp = await this.contactanosService.addContactanos( this.contactanosForm.value ).then(() => {
      this.contactanosForm.reset();
    });
  }

}
