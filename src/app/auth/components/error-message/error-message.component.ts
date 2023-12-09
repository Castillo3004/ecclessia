import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { validatorErrorMessage } from '../../helpers/validator-message.helper';

@Component({
  selector: 'auth-component-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center font-medium text-red-500 text-[10px]">
      {{ errorMessage }}
    </div>
  `,
})



export class ErrorMessageComponent {

  @Input( {required: true}) control!: AbstractControl;

  get errorMessage(): string{
    const error = this.control.errors;
    const validatorName = Object.keys( error ?? {} )[0];
    return this.control.touched && validatorName
      ? validatorErrorMessage( validatorName )
      : '';
  }


}
