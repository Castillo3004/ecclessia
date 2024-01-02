import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardParroquia } from '../../interfaces/card-parroquia';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parroquias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './parroquias.component.html',
  styleUrl: './parroquias.component.css'
})
export default class ParroquiasComponent {

  public parroquias: CardParroquia[] = [
    {
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmUFkCLqNBUUnr1kdtO48RPgr1w3vrKTRVIaYvxvjVu0X5p88VQ41KU6JTkYDSy_9hLk&usqp=CAU',
     nombreParroquia: 'San Francisco',
     direccionParroquia: '2Q4X+279, Loja',
     sacerdotes: 9,
     barrios: 3,
     capillas: 5
    },
    {
     img: 'https://img.goraymi.com/2019/03/14/b69b888cb6c519b39de827589f17c6bd_xl.jpg',
     nombreParroquia: 'San Sebastian',
     direccionParroquia: 'XQXX+699, Simón Bolívar, Loja',
     sacerdotes: 9,
     barrios: 3,
     capillas: 5
    },
    {
     img: 'https://1.bp.blogspot.com/-C-DL4dopT2A/YZ7J4uCSMiI/AAAAAAAACQs/BWpxWstLqtMm0bfH0SvknPYFLggnlrb3gCLcBGAsYHQ/s2048/20210804_173048.jpg',
     nombreParroquia: 'El Pedestal',
     direccionParroquia: '2Q3R+VPJ Maria de Leiva, Loja',
     sacerdotes: 9,
     barrios: 3,
     capillas: 5
    },
    {
     img: 'https://img.goraymi.com/2016/04/13/ccff8082d0c86290d243f6533801d158_xl.jpg',
     nombreParroquia: 'La Catedral',
     direccionParroquia: '2Q3X+9HJ, José Antonio Eguiguren, Loja',
     sacerdotes: 9,
     barrios: 3,
     capillas: 5
    },


  ]


}
