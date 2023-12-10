import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import LoginComponent from './pages/login/login.component';
import { LoginService } from './services/auth/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})


export default class AuthComponent {

  // user$!: Observable<any>;

  // public loginService = inject( LoginService );


  // ngOnInit(): void {
  //   this.user$ = this.loginService.userState$;
  // }


}
