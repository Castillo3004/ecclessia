import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { LoginService } from '../../services/auth/login.service';
import { LoginIconos } from '../../interfaces/login.interface';



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
      accion: () => this.ingresarConProovedor('facebook'),
    },
    {
      urlImg: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png',
      name: 'Google',
      accion: () => this.ingresarConProovedor('google'),
    },
    {
      urlImg: 'https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png',
      name: 'Twitter X',
      accion: () => this.ingresarConProovedor('twitter'),
    },
  ]




  // Inyeccion Dependencias
  private fb = inject( FormBuilder );
  private loginService = inject( LoginService );
  private router = inject( Router );




  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(5)] ],
    remember: [ false ],
  });





  // Metodos

  ingresar(){
    const { email, password } = this.loginForm.value;
    this.loginService.login( email, password).then(() => {
      // this.router.navigateByUrl('dashboard/inicio')
    });
  }





  ingresarConProovedor(proveedor: string){
    switch (proveedor) {
      case 'google':
        this.loginService.loginGoogle();
        break;

      case 'facebook':
        this.loginService.loginFacebook();
        break;

      case 'twitter':
        this.loginService.loginTwitter();
        break;

      default:
        break;
    }
  }


}
