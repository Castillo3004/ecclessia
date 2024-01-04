import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGaleriaEventos } from '../../interfaces/card-galeria-eventos';

@Component({
  selector: 'landing-component-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  public galeriaEventos: CardGaleriaEventos[] = [
    {
      img: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/414925668_754998976662562_7159419228768809052_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Bedkop29rLwAX9WgjRW&_nc_ht=scontent.fuio13-1.fna&oh=00_AfDFcuKi5iiCBkEGbBGZhdFHjhMc_ndJTmjYZ2a9sG7XGg&oe=659A9DC1',
      title: 'Eucaristía de clausura',
      subtitle: 'Etapa de Formación Kerigmatica Vicaria de Mácara',
      descripcion: 'Eucaristía por la clausura de La I Etapa de Formación Kerigmatica Vicaria de Mácara.',
    },
    {
      img: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/409168906_743688577793602_4056241885880446052_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=go_AIRMgdUQAX_kdD5G&_nc_ht=scontent.fuio13-1.fna&oh=00_AfAxLDZmhilAO6qAVCEd0KmHbP0USDdGyO_pzfYZPn5dHQ&oe=659A6B81',
      title: ' IV Aniversario de Posesión Canónica',
      subtitle: 'Mons. Walter Heras Segarra - Obispo de la Diócesis de Loja',
      descripcion: 'Eucaristía por el IV Aniversario de Posesión Canónica de Mons. Walter Heras Segarra:; XII Obispo de la Diócesis de Loja',
    },
    {
      img: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/408892995_742397897922670_1645221560157694185_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=P5Qvo2Hvx_0AX9n-UcO&_nc_ht=scontent.fuio13-1.fna&oh=00_AfA4s_chxxloVB85CrSWoR2bV2v0MWD-d2KXIsRmrQEZpA&oe=659A3A1E',
      title: 'Pre-congreso Americano Misionero de OMP',
      subtitle: 'Zona Sur del Ecuador',
      descripcion: 'Dirigido a Sacerdotes, Religiosas/as, agentes de Pastoral, Animadores de IAM, Grupos Juveniles, Catequistas',
    },
    {
      img: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/408282513_740918548070605_6473752733001062206_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=MTo55lbQNNEAX81_mjI&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBaQ2RfrXGDkbiDENfnx20Ykd-0dDHEG6OJSqXjbKgrtw&oe=659A5BB8',
      title: '𝟏𝟔𝟎 𝐚𝐧̃𝐨𝐬 𝐝𝐞 𝐜𝐫𝐞𝐚𝐜𝐢𝐨́𝐧 𝐝𝐞 𝐥𝐚 𝐃𝐢𝐨́𝐜𝐞𝐬𝐢𝐬 𝐝𝐞 𝐋𝐨𝐣𝐚',
      subtitle: '𝐒𝐞𝐬𝐢𝐨́𝐧 𝐒𝐨𝐥𝐞𝐦𝐧𝐞',
      descripcion: 'La Diócesis de Loja realizó la Sesión Solemne al conmemorar un aniversario más de Erección Canónica',
    },
    {
      img: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/408259059_740624224766704_7367106688959601500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=VmRCk95kGJIAX-KRnHQ&_nc_ht=scontent.fuio13-1.fna&oh=00_AfAXYPqgd_ZbnFo2cplATJcJR4rZSxq3gseLq5VrBv0n7g&oe=659AF41D',
      title: 'Santa Eucaristía de acción de gracias ',
      subtitle: '160 años de vida y fe de nuestra Iglesia lojana',
      descripcion: 'Santa Eucaristía de acción de gracias por los 160 años de vida y fe de nuestra Iglesia lojana.',
    }
  ]

}
