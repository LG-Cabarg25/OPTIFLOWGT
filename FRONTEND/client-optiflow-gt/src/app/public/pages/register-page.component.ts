import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/components/input-component';
import { NavbarComponent } from '@shared/components/navbar-component';
import { AboutSectionComponent, ContactSectionComponent, ServicesSectionComponent } from '@public/sections';
import { FooterComponentComponent } from '@shared/components/footer-component.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, NavbarComponent, FooterComponentComponent],
  template: `
  <div class="bg-gradient-to-r from-[#020831] to-[#0E216C]">
  <navbar-component class="p-2"/>
  <section id="about"  class="p-20">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 h-full"
      >
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
        >
          <h2 class="text-4xl justify-center lg:text-6xl font-semibold text-gradient mb-6">
           OPTIFLOW-GT
          </h2>
          <div class="row items-center">
    <div class="col">
      <form >
        <shared-input [type]="'text'"label="Nombre" placeholder="Nombre completo"/>
        <shared-input [type]="'text'"label="Correo" placeholder="Correo electronico"/>
        <shared-input [type]="'password'"label="Nombre" placeholder="Nombre completo"/>
        <shared-input [type]="'email'"label="Nombre" placeholder="Nombre completo"/>
        <shared-input [type]="'email'"label="Nombre" placeholder="Nombre completo"/>
        <shared-input [type]="'email'"label="Nombre" placeholder="Nombre completo"/>
        <shared-input [type]="'email'"label="Nombre" placeholder="Nombre completo"/>
        <shared-input [type]="'email'"label="Nombre" placeholder="Nombre completo"/>
      </form>
    </div>
  </div>
        </div>
        <div class="flex justify-center lg:w-1/2">
          <div
            class="w-full border-none md:w-96"
          >
            <img
              src="img/profile.png"
              alt="El Mero Guss"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
      <footer-component />
  </div>

  `,
  styles: `
  `
})
export class RegisterPageComponent {

}
