import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '@core/entities/user.interface';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent implements OnInit {

  @Input() isLoading: boolean;
  @Output() sendUser: EventEmitter<User> = new EventEmitter();

  public form: FormGroup;
  public fieldTextType: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get passwordField(): AbstractControl {
    return this.form.get('password');
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

  public toggleTypeInput(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public login(): void {
    const user = {
      ...this.form.value,
    } as User;
    this.sendUser.emit(user);
  }
}
