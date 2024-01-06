import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { toSignal } from "@angular/core/rxjs-interop";
import { ParroquiasService } from '../../services/parroquias.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-parroquia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parroquia.component.html',
  styleUrl: './parroquia.component.css'
})
export default class ParroquiaComponent {

  private readonly parroquiasService = inject( ParroquiasService );
  private route = inject( ActivatedRoute );


  public parroquia = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.parroquiasService.getParroquiaById( id ))
    )
  )


}
