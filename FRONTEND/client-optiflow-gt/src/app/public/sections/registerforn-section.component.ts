import { Component } from '@angular/core';
import { FormRegisterComponent } from '../components/form-register.component';

@Component({
  selector: 'registerforn-section',
  standalone: true,
  imports: [ FormRegisterComponent,] ,
  template: `
    <section id="about" class="p-20">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 h-full"
      >
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
        >
          <h2
            class="text-4xl justify-center lg:text-6xl font-semibold text-gradient mb-6"
          >
            OPTIFLOW-GT
          </h2>
          <div class="row items-center">
            <div class="col">
            <form-register/>
            </div>
          </div>
        </div>
        <div class="flex profile justify-center lg:w-1/2">
          <div class="w-full border-none md:w-150">
            <img
              src="img/profile.png"
              alt="El Mero Guss"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .text-gradient{
  background-image: linear-gradient(to right, #03B19D, #8EC74C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #03B19D;
}
.profile {
      filter: drop-shadow(
        0 0 10px #8EC74C
      )}
  `,
})
export class RegisterfornSectionComponent {}
