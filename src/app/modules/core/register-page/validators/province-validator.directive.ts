import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

const PROVINCES = new Set([
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon'
]);

@Directive({
  selector: '[appProvinceValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProvinceValidatorDirective),
      multi: true
    }
  ]
})
export class ProvinceValidatorDirective implements Validator {
  @Input() allowEmpty = false;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = (control.value || '').trim();

    if (!value && this.allowEmpty) {
      return null;
    }

    if (!value) {
      return { required: true };
    }

    return PROVINCES.has(value) ? null : { provinceInvalid: true };
  }
}
