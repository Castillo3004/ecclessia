import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { RegisterService } from '../../services/auth/register.service';


@Component({
  selector: 'auth-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ErrorMessageComponent ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {

  // Variables
  private patternEmail = "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";




  // Inyeccion Dependencias
  private fb = inject( FormBuilder );
  private registerService = inject( RegisterService );
  private router = inject( Router );


  public registerForm: FormGroup = this.fb.group({
    nombre: ['Fatima Padilla', [Validators.required, Validators.minLength(5)] ],
    email: ['fatima@google.com', [Validators.required, Validators.pattern(this.patternEmail) ] ],
    telefono: ['1231312', [Validators.required, Validators.maxLength(10)]],
    cedula: ['131321', [Validators.required, Validators.maxLength(10)] ],
    password: ['1234567', [Validators.required, Validators.minLength(5)] ],
    password2: ['1234567', [Validators.required, Validators.minLength(5)] ],
    terminos: [ true, Validators.requiredTrue ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });




  // Metodos

  registrar(){
    // console.log(this.registerForm.value);
    // console.log(this.registerForm.get('nombre')?.errors)
    const { email, password} = this.registerForm.value;
    this.registerService.signUp( email, password );
    // this.router.navigateByUrl('/dashboard/inicio');
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
