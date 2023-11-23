import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialItem {
  link: string;
  path: string;
  viewBox: string;
}

interface EnlacesFooter{
  link: string;
  titulo: string;
}



@Component({
  selector: 'landing-shared-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})



export class FooterComponent {

  public fechaActual: number = new Date().getFullYear();

  public socialItems: SocialItem[] = [
    {
      link: 'https://www.facebook.com',
      path: 'M256,128 C256,57.3075 198.6925,0 128,0 C57.3075,0 0,57.3075 0,128 C0,191.8885 46.80775,244.8425 108,254.445 L108,165 L75.5,165 L75.5,128 L108,128 L108,99.8 C108,67.72 127.1095,50 156.3475,50 C170.35175,50 185,52.5 185,52.5 L185,84 L168.8595,84 C152.95875,84 148,93.86675 148,103.98925 L148,128 L183.5,128 L177.825,165 L148,165 L148,254.445 C209.19225,244.8425 256,191.8885 256,128',
      viewBox: '0 0 256 256',
    },
    {
      link: 'https://www.instagram.com',
      path: 'M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z',
      viewBox: '0 0 256 256',
    },
    {
      link: 'https://www.whatsapp.com',
      path: 'M128.534362,0 C162.632154,0.0167797743 194.636347,13.290872 218.701124,37.3827556 C242.767193,61.4746393 256.012889,93.5020654 256,127.557263 C255.971869,197.135888 199.924108,253.875359 130.640455,255.00319 L128.536943,255.0203 L128.484023,255.0203 C107.478684,255.012675 86.8337321,249.825746 68.4330329,239.974525 L67.5721511,239.509335 L4.26325641e-14,257.232649 L18.0834337,191.178422 C6.93004678,171.851995 1.06099804,149.92212 1.0700333,127.455293 C1.09842984,57.1777263 58.2787376,0 128.534362,0 Z M128.578247,21.5297412 C70.1407473,21.5297412 22.6139727,69.0526435 22.5907312,127.465619 C22.5831119,147.178041 28.0151402,166.387184 38.3097958,183.078384 L38.7883844,183.846952 L41.3079321,187.856027 L30.6050176,226.949029 L70.7022244,216.431983 L74.5706077,218.725649 C90.5784714,228.224681 108.891521,233.324608 127.588094,233.490269 L128.493058,233.494432 L128.536943,233.494432 C186.929267,233.494432 234.454751,185.967657 234.479283,127.550809 C234.489601,99.2433297 223.480779,72.6241539 203.477997,52.5994294 C183.475215,32.5747049 156.875401,21.5387764 128.578247,21.5297412 Z M83.4083858,68.5931358 C85.5303818,68.5931358 87.6575409,68.6124971 89.5123514,68.7080127 C91.4678404,68.8035284 94.0932297,67.9645397 96.677315,74.1743469 C97.6685436,76.5543557 99.1775305,80.2307392 100.720967,83.9868313 L101.052055,84.7924848 C103.536525,90.8373856 106.02081,96.8636995 106.498646,97.8209211 C107.293749,99.4137089 107.824248,101.276264 106.76325,103.399551 C105.702252,105.52671 105.170462,106.853603 103.578965,108.716158 C101.986177,110.57355 100.234627,112.868506 98.8018926,114.294787 C98.7240697,114.372295 98.6460932,114.450123 98.5683791,114.528424 L98.3364397,114.764902 C96.9161294,116.233847 95.7279512,117.917644 97.405299,120.792432 C99.262691,123.98188 105.654494,134.413737 115.122159,142.857835 C127.287496,153.707896 137.550264,157.071595 140.734549,158.666964 C143.918833,160.261043 145.777516,159.995148 147.634908,157.866698 C149.493591,155.743411 155.596266,148.569412 157.719552,145.379964 C159.842839,142.191807 161.966126,142.724888 164.885807,143.787177 C166.273238,144.292199 170.540323,146.298457 174.9776,148.435687 L176.357151,149.101654 C180.800645,151.251317 185.134043,153.390201 186.647883,154.148042 C189.833459,155.743411 191.956746,156.539805 192.751849,157.866698 C193.548243,159.197463 193.548243,165.572487 190.894457,173.012381 C188.240671,180.452274 175.516439,187.24292 169.396985,188.158063 C163.909998,188.9764 156.967044,189.318449 149.33741,186.895708 C144.712646,185.426832 138.779059,183.467471 131.180403,180.186379 C99.2317129,166.392114 78.3654182,134.220124 76.7739212,132.096837 L76.7739212,132.096837 L76.6655403,131.952082 C74.7246668,129.357515 63.7683053,114.507305 63.7683053,99.1478141 C63.7683053,83.4729234 71.9968485,75.7671347 74.9152385,72.5789776 C77.8349192,69.393402 81.2850989,68.5931358 83.4083858,68.5931358 Z',
      viewBox: '0 0 256 258',
    },
    {
      link: 'https://www.twitter.com',
      path: 'M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z',
      viewBox: '0 0 30 30',
    },
  ]

  public footerEnlacesIzquierda: EnlacesFooter[] = [
    { link: '#', titulo: 'Sobre Nosotros' },
    { link: '#', titulo: 'Trabaja con Nosotros' },
    { link: '#', titulo: 'Contáctanos' },
  ]

  public footerEnlacesDerecha: EnlacesFooter[] = [
    { link: '#', titulo: 'Información Legal' },
    { link: '#', titulo: 'Polìticas de Privacidad' },
  ]

}
