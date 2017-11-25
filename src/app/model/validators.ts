import { FormControl, ValidationErrors } from "@angular/forms";

export class FilterValidators {
        public static isProbabilityValid(control: FormControl): ValidationErrors | null {
            const valid = (control.value && control.value >= 0 && control.value <= 1 ) || control.value == null || control.value=='' ;
            if (valid) {
                return null;
            }
            return { empty: true };
        }
}
