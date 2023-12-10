import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/auth/login.service';
import { Observable } from 'rxjs';

interface LoginIconos{
  urlImg: string;
  name: string;
  accion: () => void;
}


@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent{

  // Variables
  public readonly loginIcons: LoginIconos[] = [
    {
      urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
      name: 'Facebook',
      accion: () => this.ingresarconGoogle(),
    },
    {
      urlImg: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png',
      name: 'Google',
      accion: () => this.ingresarconGoogle(),
    },
    {
      urlImg: 'https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png',
      name: 'Linkedin',
      accion: () => this.ingresarconGoogle(),
    },
  ]




  // Inyeccion Dependencias
  private fb = inject( FormBuilder );
  private loginService = inject( LoginService );
  private router = inject( Router );




  public loginForm: FormGroup = this.fb.group({
    email: ['fatima@google.com', [Validators.required, Validators.email] ],
    password: ['1234567', [Validators.required, Validators.minLength(5)] ],
    remember: [ false ],
  });





  // Metodos

  ingresar(){
    const { email, password } = this.loginForm.value;
    this.loginService.login( email, password).then(() => {
      // this.router.navigateByUrl('dashboard/inicio')
    });
  }



  ingresarconGoogle(){

    this.loginService.loginGoogle();

  }


}
