import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'auth-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {


  // Inyeccion Dependencias
  private fb = inject( FormBuilder );



  public registerForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)] ],
    email: ['', [Validators.required, Validators.email] ],
    telefono: ['', [Validators.required, Validators.maxLength(10)]],
    cedula: ['', [Validators.required, Validators.maxLength(10)] ],
    password: ['', [Validators.required, Validators.minLength(5)] ],
    password2: ['', [Validators.required, Validators.minLength(5)] ],
    terminos: [ false, Validators.requiredTrue ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });











  // Metodos

  registrar(){
    console.log(this.registerForm.value);
  }





  // Validar Contraseñas Coinciden
  passwordsIguales(pass1: string, pass2: string, ){

    return ( formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if( pass1Control?.value === pass2Control?.value ){
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors( { noEsIgual: true } )
      }
    }

  }


}
