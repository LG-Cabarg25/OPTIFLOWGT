import { Component, inject, input, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputFullComponent } from '@shared/components/input-full-component.component';
import { ValidatorsService } from '@shared/services';
import { IsEqualFieldValidator, EmailValidator } from '@shared/validators';
import { emailPatter } from '../../shared/validators/validators';
import { InputShortComponent } from '@shared/components/input-short-component.component';

@Component({
  selector: 'form-register',
  standalone: true,
  imports: [InputFullComponent, ReactiveFormsModule, InputShortComponent],
  template: `
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-2 text-center text-4xl font-bold leading-9 tracking-tight text-white"
        >
          Crear una cuenta
        </h2>
      </div>
      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          [formGroup]="registerForm()"
          (ngSubmit)="onSubmit()"
          autocomplete="off"
        >
          <div class="space-y-12">
            <div class=" space-x-4">
              <div
                class=" mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8 "
              >
                <div class="col-span-full">
                  <input-full
                    [type]="'text'"
                    placeholder="Nombre *"
                    [control]="$any(registerForm().get('name'))"
                  />
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'text'"
                    placeholder="Apellidos *"
                    [control]="$any(registerForm().get('lastname'))"
                  />
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'email'"
                    placeholder="Correo Electrónico *"
                    [control]="$any(registerForm().get('email'))"
                  />
                </div>
                <div class="sm:col-span-4">
                  <input-short
                    [type]="'number'"
                    placeholder="Teléfono *"
                    [control]="$any(registerForm().get('phonenumber'))"
                  />
                </div>
                <div class="sm:col-span-4 icon-white">
                  <input-short
                    [type]="'date'"
                    placeholder="Fecha de Nac."
                    [control]="$any(registerForm().get('date'))"
                  />
                </div>
                <div class="sm:col-span-4">
                  <select
                    class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option class="bg-primary/90 text-secondary/90">
                      Género *
                    </option>
                    <option class="bg-primary/90 text-secondary/90">
                      Masculino
                    </option>
                    <option class="bg-primary/90 text-secondary/90">
                      Femenino
                    </option>
                    <span class="form-text text-danger"></span>
                  </select>
                </div>
                <div class="sm:col-span-4">
                  <select
                    class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option class="bg-primary/90 text-secondary/90">
                      Estado civil *
                    </option>
                    <option class="bg-primary/90 text-secondary/90">
                      Soltero
                    </option>
                    <option class="bg-primary/90 text-secondary/90">
                      Casado
                    </option>
                    <option class="bg-primary/90 text-secondary/90">
                      Otro...
                    </option>
                    <span class="form-text text-danger"></span>
                  </select>
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'text'"
                    placeholder="Dirección *"
                    [control]="$any(registerForm().get('address'))"
                  ></input-full>
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'password'"
                    placeholder="Contraseña *"
                    [control]="$any(registerForm().get('password'))"
                  ></input-full>
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'password'"
                    placeholder="Confirmar Contraseña *"
                    [control]="$any(registerForm().get('confirmPassword'))"
                  ></input-full>
                </div>

                <div class="col-span-full flex flex-col space-y-2">
                  <div class="flex items-center space-x-4">
                    <input
                      id="flexCheckDefault"
                      formControlName="termsAndConditions"
                      type="checkbox"
                      class="h-4 w-4 flex rounded border-gray-300 checkbox checkbox-accent"
                    />
                    <label
                      class="text-sm font-medium leading-6 text-accent/90"
                      for="flexCheckDefault"
                    >
                      Acepto los términos de servicio y Política de privacidad.
                    </label>
                  </div>
                  <div>
                    @if (isValidField('termsAndConditions')) {
                    <span class="form-text text-error">
                      {{ getFieldError('termsAndConditions') }}
                    </span>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              class="rounded-full bg-gradient-to-r from-[#03B19D] to-[#8EC74C] w-full px-3 py-2 text-xl font-semibold text-white shadow-sm hover:from-[#8EC74C] hover:to-[#03B19D]"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Ya tienes cuenta?
          <a
            href="/login"
            class="font-semibold leading-6 text-info hover:text-secondary"
            >Iniciar Sesión</a
          >
        </p>
      </div>
    </div>
  `,
  styles: `
  .form-input {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.6);
      color: white;
      padding: 0.375rem 0.75rem;
      border-radius: 0.375rem;
      outline: 0;
      transition: border-color 0.2s;
    }
    .form-input:focus {
      border-color: white;
    }
    .form-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  `,
})
export class FormRegisterComponent {
  #fb = inject(FormBuilder);
  #validatorsService = inject(ValidatorsService);
  #isEqualFieldValidator = inject(IsEqualFieldValidator);
  #emailValidator = inject(EmailValidator);

  public registerForm = signal<FormGroup>(
    this.#fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(this.#validatorsService.NamePattern()),
          ],
        ],
        lastname: [
          '',
          [
            Validators.required,
            Validators.pattern(this.#validatorsService.LastnamePattern()),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.#validatorsService.emailPatter()),
          ],
          [this.#emailValidator],
        ],
        phonenumber: ['', [Validators.required]],
        date: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        civilstatus: ['', [Validators.required]],
        address: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        termsAndConditions: [false, [Validators.requiredTrue]],
      },
      {
        validators: [
          this.#isEqualFieldValidator.validate('password', 'confirmPassword'),
        ],
      }
    )
  );
  isValidField(field: string): boolean | null {
    return (
      this.registerForm().controls[field].errors &&
      this.registerForm().controls[field].touched
    );
  }
  getFieldError(field: string): string | null {
    if (!this.registerForm().controls[field]) return null;

    const errors = this.registerForm().controls[field].errors || {};
    console.log(errors);
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Debe aceptar las condiciones de uso';
      }
    }

    return null;
  }
  onSubmit(): void {
    this.registerForm().markAllAsTouched();
  }
}
