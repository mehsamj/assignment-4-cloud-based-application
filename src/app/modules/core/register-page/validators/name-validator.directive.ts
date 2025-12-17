import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

const NAME_PATTERN = /^[A-Za-z ]+$/;

@Directive({
  selector: '[appNameValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NameValidatorDirective),
      multi: true
    }
  ]
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').trim();
    if (!value) {
      return { required: true };
    }

    const hasOnlyLetters = NAME_PATTERN.test(value);
    const hasMinLength = value.length >= 5;

    if (hasOnlyLetters && hasMinLength) {
      return null;
    }

    return { nameInvalid: true };
  }
}
