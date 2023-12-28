import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTeam } from '../../interfaces/card-team';

@Component({
  selector: 'landing-component-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  public teams: CardTeam[] = [

    {
      imgAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      nombre: 'Carlos Castillo',
      cargo: 'CEO',
      correo: 'mailto:carloscastillo905@outlook.com',
      facebook: 'https://www.facebook.com',
      github: 'https://www.github.com',
    },
    {
      imgAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      nombre: 'Anthonny Espinosa',
      cargo: 'COO',
      correo: 'mailto:adespinosa5@utpl.edu.ec',
      facebook: 'https://www.facebook.com',
      github: 'https://www.github.com',
    },
    {
      imgAvatar: 'https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      nombre: 'Daniel Guaman',
      cargo: 'Revisor TIC',
      correo: 'mailto:danielguaman@utpl.edu.ec',
      facebook: 'https://www.facebook.com',
      github: 'https://www.github.com',
    },
    {
      imgAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      nombre: 'Ramiro Ramirez',
      cargo: 'Director TIC',
      correo: 'mailto:ramiroramirez@utpl.edu.ec',
      facebook: 'https://www.facebook.com',
      github: 'https://www.github.com',
    },




  ];


}
