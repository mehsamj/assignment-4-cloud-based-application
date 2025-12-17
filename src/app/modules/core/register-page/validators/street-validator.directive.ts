import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

const STREET_PATTERN = /^[A-Za-z0-9 ]+$/;

@Directive({
  selector: '[appStreetValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StreetValidatorDirective),
      multi: true
    }
  ]
})
export class StreetValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').trim();
    if (!value) {
      return { required: true };
    }

    return STREET_PATTERN.test(value) ? null : { streetInvalid: true };
  }
}
