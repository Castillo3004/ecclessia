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

  public menuItems = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path )
    .filter( route => !route.path?.includes(':') )
}
