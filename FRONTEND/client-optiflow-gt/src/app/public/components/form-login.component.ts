import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFullComponent } from '@shared/components';
import { ValidatorsService } from '@shared/services';

@Component({
  selector: 'form-login',
  standalone: true,
  imports: [ReactiveFormsModule,InputFullComponent],
  template: `
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-4 text-center text-3xl font-bold leading-9 tracking-tight text-white">Iniciar sesión en su cuenta</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form [formGroup]="loginForm()"
          (ngSubmit)="onSubmit()"
          autocomplete="off">
      <div>
        <div class="space-y-12">
        <div class="col-span-full">
        <input-full
                    [type]="'text'"
                    placeholder="Nombre de usuario"
                    [control]="$any(loginForm().get('name'))"
                  />
</div>
<div class="col-span-full">
                  <input-full
                    [type]="'password'"
                    placeholder="Contraseña"
                    [control]="$any(loginForm().get('password'))"
                  ></input-full>
                  <div class="text-sm items-end p-6">
            <a href="#" class="font-semibold text-info hover:text-secondary ">Olvidaste tu contraseña?</a>
          </div>
                </div>
        </div>
      </div>
      <div>
        <button type="submit"
        class="rounded-full  bg-gradient-to-r from-[#03B19D] to-[#8EC74C] w-full px-3 py-2 text-xl font-semibold text-white shadow-sm hover:from-[#8EC74C] hover:to-[#03B19D]">
          Iniciar sesión</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-white">
      No tienes una cuenta?
      <a href="/register" class="font-semibold leading-6 text-info hover:text-secondary">Crear una cuenta</a>
    </p>
  </div>
</div>
  `,
  styles: ``
})
export class FormLoginComponent {
  #fb = inject(FormBuilder);
  #validatorsService = inject(ValidatorsService);

  public loginForm = signal<FormGroup>(
    this.#fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(this.#validatorsService.NamePattern()),
          ],

        ],
        password: ['', [Validators.required, ]],

      }))

        onSubmit(): void {
          this.loginForm().markAllAsTouched();
        }
}
