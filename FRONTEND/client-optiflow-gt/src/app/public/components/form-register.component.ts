import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-register',
  standalone: true,
  imports: [],
  template: `
    <hr class="border-secondary">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-4 text-center text-4xl font-bold leading-9 tracking-tight text-white">Crear una cuenta</h2>
  </div>
  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
  <form autocomplete="off">
  <div class="space-y-12">
    <div class="border-b border-secondary/90 pb-12 p-2">
      <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="col-span-full">
          <label for="email" class="block text-sm font-medium leading-6 text-accent/90">Nombres</label>
          <div class="mt-2">
            <input id="text" name="email" type="email" autocomplete="email" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 laceholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="email" class="block text-sm font-medium leading-6 text-accent/90">Apellidos</label>
          <div class="mt-2">
            <input id="text" name="email" type="email" autocomplete="email" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 laceholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="email" class="block text-sm font-medium leading-6 text-accent/90">Correo Electrónico</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 laceholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-accent/90">Teléfono</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 laceholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-accent/90">Fecha Nac.</label>
          <div class="mt-2">
            <input type="date" name="last-name" id="last-name" autocomplete="family-name" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#]focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-accent/90">Género</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:max-w-xs sm:text-sm sm:leading-6">
              <option>...</option>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
        </div>



        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-accent/90">Estado Civil</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:max-w-xs sm:text-sm sm:leading-6">
            <option>...</option>
              <option>Soltero</option>
              <option>Casado</option>
              <option>Otro...</option>
            </select>
          </div>
        </div>


        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-white">Dirección</label>
          <div class="mt-2">
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 laceholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="email" class="block text-sm font-medium leading-6 text-accent/90">Contraseña</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="password" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 laceholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="email" class="block text-sm font-medium leading-6 text-accent/90">Confirmar Contraseña</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="password" class="form-input block w-full rounded-md border-0 py-1.5 text-[#EEEA75]shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
        <input id="comments" name="comments" type="checkbox" class="h-4 w-4 flex rounded border-gray-300 checkbox checkbox-accent">
        <label for="email" class="flex text-sm font-medium leading-6 text-accent/90">Acepto los términos de servicio y Política de privacidad.</label>

        </div>

      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-white">Cancel</button>
    <button type="submit" class="rounded-md bg-info px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent">Save</button>
  </div>
</form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Ya tienes cuenta?
      <a href="#" class="font-semibold leading-6 text-info hover:text-secondary">Iniciar Sesión</a>
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
  `
})
export class FormRegisterComponent {



}
