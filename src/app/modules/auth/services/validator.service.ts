import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  isValidField( field: string ,form: FormGroup): boolean | null {
    return form.controls[field].errors && form.controls[field].touched
  }
}
