import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from '@core/constants/validation.constant';
import { User } from '@core/entities/user.interface';
import { CustomValidation } from '@utils/customs.validator';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  @Input() isLoading: boolean;
  @Output() sendUser: EventEmitter<User> = new EventEmitter();

  public form: FormGroup;
  public fieldTextType: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get passwordField(): AbstractControl {
    return this.form.get('password');
  }

  get repeatPasswordField(): AbstractControl {
    return this.form.get('repeatPassword');
  }

  get isFieldText(): string {
    return this.fieldTextType ? 'text' : 'password';
  }

  get formDisabled(): boolean {
    return this.form.invalid || this.isLoading;
  }

  public isValid(control: AbstractControl): boolean {
    return control.touched && !control.errors;
  }

  public isInValid(control: AbstractControl): boolean {
    return control.touched && !!control.errors;
  }

  public hasError(type: string, control: AbstractControl): boolean {
    return control.errors?.[type];
  }

  private buildForm(): void {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(REGEX.ALPHA),
            Validators.minLength(3),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required]],
      },
      {
        validator: CustomValidation.matchPassword('password', 'repeatPassword'),
      }
    );
  }

  public toggleTypeInput(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  public save(): void {
    const user = {
      ...this.form.value,
    } as User;
    this.sendUser.emit(user);
  }

}
