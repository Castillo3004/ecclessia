import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface LoginIconos{
  urlImg: string;
  name: string;
}

@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  public loginIconos: LoginIconos[];

  constructor(){
    this.loginIconos = [
      { urlImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png', name: 'Facebook' },
      { urlImg: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png', name: 'Google' },
      { urlImg: 'https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png', name: 'Linkedin' },
    ]
  }

}
