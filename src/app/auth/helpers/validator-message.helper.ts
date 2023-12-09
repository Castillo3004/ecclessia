
interface ErrorMessage {
  [key: string]: string;
}


const errorMessages: ErrorMessage = {
  required: 'Este campo es requerido',
  pattern: 'Email debe ser valido',
  minlength: 'Debe ser minimo 5 caracteres',
  maxlength: 'Debe ser maximo 10 caracteres',
  noEsIgual: 'Las contraseñas deben coincidir'
}


export function validatorErrorMessage( validatorName: string ): string {

  return errorMessages[ validatorName ] ?? '';

}

