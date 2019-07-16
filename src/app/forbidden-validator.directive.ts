import { Directive } from '@angular/core';
import { Validator,ValidatorFn,AbstractControl,NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appForbiddenValidator]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective,multi: true
    }
  ]
})

export class ForbiddenValidatorDirective implements Validator{

  constructor() { }

  validate (control: AbstractControl):{[key: string]:any} {
      if(!control){
        return null;
      }
      const isForbidden = control.value === 'franck';
      console.log('isForbidden',isForbidden);
      if(isForbidden){
        return {'isForbidden':{value:control.value}};
      }
      return null;
  }
}