export interface Parroquia {
  id: string,
  celularParroco:      string;
  celularParroquia:    string;
  direccionParroquia:  string;
  emailParroco:        string;
  emailParroquia:      string;
  fechaNombramiento:   string;
  imgParroquia:        string;
  lat:                 string;
  lng:                 string;
  nombreParrocoActual: string;
  nombreParroquia:     string;
  numeroSacerdotes:    string;
  patronoParroquia:    string;
  barrios:             Barrios;
  capillas:            Capillas;
}

export interface Barrios {
  idBarrio:     string;
  imgBarrio:    string;
  nombreBarrio: string;
}

export interface Capillas {
  idCapilla:     string;
  imgCapilla:    string;
  nombreCapilla: string;
}
