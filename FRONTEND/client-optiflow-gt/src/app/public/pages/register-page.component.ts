import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { RegisterfornSectionComponent } from '@public/sections/registerforn-section.component';
import { FooterComponentComponent, NavbarComponent } from '@shared/components';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RegisterfornSectionComponent, NavbarComponent, FooterComponentComponent],
  template: `
    <div class="bg-gradient-to-r from-[#020831] to-[#0E216C]">
      <navbar-component />
      <registerforn-section />
      <footer-component />
    </div>

  `,
  styles: `
  `
})
export class RegisterPageComponent {

}
