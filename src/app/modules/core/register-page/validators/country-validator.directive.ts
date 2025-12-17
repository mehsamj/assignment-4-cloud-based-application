import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCountryValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CountryValidatorDirective),
      multi: true
    }
  ]
})
export class CountryValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').trim();

    if (!value) {
      return { required: true };
    }

    return value === 'Canada' ? null : { countryInvalid: true };
  }
}
