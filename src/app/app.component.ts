import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'credo';
  hide = true;
  confirm = true;

  form: FormGroup = new FormGroup(
    {
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required, Validators.minLength(9)]),
      date: new FormControl(''),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
    { validators: CustomValidators.passwordsMatching }
  );

  register(form: any){
    if (form.invalid){
      return
    }
    console.log(this.form.value);
    
  }

  get date(): FormControl {
    return this.form.get('date') as FormControl;
  }

  get fullName(): FormControl {
    return this.form.get('fullName') as FormControl;
  }

  get tel(): FormControl {
    return this.form.get('tel') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }
}
