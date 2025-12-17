import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneValidatorDirective),
      multi: true
    }
  ]
})
export class PhoneValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const raw = (control.value || '').toString();
    const digitsOnly = raw.replace(/\D/g, '').trim();

    if (!digitsOnly) {
      return { required: true };
    }

    return digitsOnly.length === 10 ? null : { phoneInvalid: true };
  }
}
