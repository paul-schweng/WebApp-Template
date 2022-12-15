import {AbstractControl} from "@angular/forms";

export function addErrorFormControl(formControl: AbstractControl | null, error) {
  let errors = formControl?.errors;
  formControl?.setErrors({...errors, ...error})
}

export function removeErrorFormControl(formControl: AbstractControl | null, error) {
  if(formControl?.errors)
    delete formControl.errors[error];
}
