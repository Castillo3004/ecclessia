import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {

  public menuItems;

  constructor(){

    this.menuItems = [
      { path: '/inicio', titulo: 'Inicio'},
      { path: '/servicios', titulo: 'Servicios'},
      { path: '/parroquias', titulo: 'Parroquias'},
      { path: '/sobre-nosotros', titulo: 'Sobre Nosotros'},
    ]

  }


}
