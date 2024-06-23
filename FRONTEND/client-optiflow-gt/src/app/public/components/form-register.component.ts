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
    <hr class="border-secondary" />
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-4 text-center text-4xl font-bold leading-9 tracking-tight text-white"
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
            <div class="border-b border-secondary/90 pb-12 p-2 space-x-4">
              <div
                class=" mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8 "
              >
                <div class="col-span-full">
                  <input-full
                    [type]="'text'"
                    placeholder="Nombre"
                    [control]="$any(registerForm().get('name'))"
                  />
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'text'"
                    placeholder="Apellidos"
                    [control]="$any(registerForm().get('lastname'))"
                  />
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'email'"
                    placeholder="Correo Electrónico"
                    [control]="$any(registerForm().get('email'))"
                  />
                </div>
                <div class="sm:col-span-4 w-full">
                  <input-short
                    [type]="'number'"
                    placeholder="Teléfono"
                    [control]="$any(registerForm().get('phonenumber'))"
                  />
                </div>
                <div class="sm:col-span-4 w-full">
                  <input-short
                    [type]="'date'"
                    placeholder="Fecha de Nac."
                    [control]="$any(registerForm().get('date'))"
                  />
                </div>
                <div class="sm:col-span-4">
                  <select
                    placeholder="Género"
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Género</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <span class="form-text text-danger"></span>
                  </select>
                </div>
                <div class="sm:col-span-4">
                  <select
                    placeholder="Estado civil"
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Estado civil</option>
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Otro...</option>
                    <span class="form-text text-danger"></span>
                  </select>
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'text'"
                    placeholder="Dirección"
                    [control]="$any(registerForm().get('address'))"
                  ></input-full>
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'password'"
                    placeholder="Contraseña"
                    [control]="$any(registerForm().get('password'))"
                  ></input-full>
                </div>
                <div class="col-span-full">
                  <input-full
                    [type]="'password'"
                    placeholder="Confirmar Contraseña"
                    [control]="$any(registerForm().get('confirmPassword'))"
                  ></input-full>
                </div>

                <div class="col-span-full flex space-x-4">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 flex rounded border-gray-300 checkbox checkbox-accent "
                  />
                  <label
                    for="email"
                    class="flex last:text-sm font-medium leading-6 text-accent/90 "
                    >Acepto los términos de servicio y Política de
                    privacidad.</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="text-sm font-semibold leading-6 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-info px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent"
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
    this.#fb.group({
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
      phonenumber: ['',[Validators.required]],
      date: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      civilstatus: ['',[Validators.required]],
      address: ['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    })
  );
  onSubmit(): void {
    this.registerForm().markAllAsTouched();
  }
}
