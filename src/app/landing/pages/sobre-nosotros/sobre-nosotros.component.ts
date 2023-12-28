import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../../components/team/team.component';

@Component({
  selector: 'sobre-nosotros',
  standalone: true,
  imports: [CommonModule, TeamComponent],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export default class SobreNosotrosComponent {

}
