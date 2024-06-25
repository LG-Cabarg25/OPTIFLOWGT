import { Component, inject, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsService } from '@shared/services';

type inputType = 'text' | 'password' | 'email'| 'number' | 'date' ;

@Component({
  selector: 'input-short',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
      <div class=" mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8 ">
    <div class="col-span-full">
    <input
      [type]="type()"
      [formControl] = "control()"
      class="form-input block  rounded-md border-0 w-full py-1.5 text-[#EEEA75] shadow-sm ring-1 ring-inset ring-gray-300 laceholder:text-[#EEEA75]focus:ring-2 focus:ring-inset focus:ring-[#EEEA75] sm:text-sm sm:leading-6"
      [placeholder]="placeholder()"
    />
    @if (isValidControl()) {<span class="form-text text-error/70">
      {{getError()}}
    </span>}
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

    input[type='date'] {
        position: left;
        color: #ffffff;
      }
      input[type='date']::-webkit-calendar-picker-indicator {
        filter: invert(1); /* Invierte los colores del ícono del calendario */
      }
  `
})
export class InputShortComponent {
control = input.required<FormControl>();
type = input<inputType>('text');
placeholder = input<string>('')
#validatorsService = inject(ValidatorsService);
public isValidControl(): boolean | null {
  return this.#validatorsService.isValidField(this.control());
}

public getError(): string | null {
  return this.#validatorsService.getControlError(this.control());
}
}
