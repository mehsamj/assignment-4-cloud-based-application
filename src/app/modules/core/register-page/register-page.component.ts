import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NameValidatorDirective } from './validators/name-validator.directive';
import { PhoneValidatorDirective } from './validators/phone-validator.directive';
import { StreetValidatorDirective } from './validators/street-validator.directive';
import { ProvinceValidatorDirective } from './validators/province-validator.directive';
import { CountryValidatorDirective } from './validators/country-validator.directive';

type Province =
  | 'Alberta'
  | 'British Columbia'
  | 'Manitoba'
  | 'New Brunswick'
  | 'Newfoundland and Labrador'
  | 'Northwest Territories'
  | 'Nova Scotia'
  | 'Nunavut'
  | 'Ontario'
  | 'Prince Edward Island'
  | 'Quebec'
  | 'Saskatchewan'
  | 'Yukon';

type Country = 'Canada' | 'United States';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NameValidatorDirective,
    PhoneValidatorDirective,
    StreetValidatorDirective,
    ProvinceValidatorDirective,
    CountryValidatorDirective
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  provinces: Province[] = [
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
  ];

  countries: Country[] = ['United States', 'Canada'];

  model = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    street: '',
    province: '' as '' | Province,
    country: '' as '' | Country,
    terms: false
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/products']);
    }
  }
}
