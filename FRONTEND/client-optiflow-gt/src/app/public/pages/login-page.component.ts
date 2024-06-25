import { Component } from '@angular/core';
import { FormLoginComponent } from '@public/components';
import { LoginFormComponent } from '@public/sections/login-form.component';
import { FooterComponentComponent, NavbarComponent } from '@shared/components';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponentComponent, LoginFormComponent],
  template: `
    <div class="bg-gradient-to-r from-[#020831] to-[#0E216C]">
      <navbar-component />
      <login-form-sect/>
      <footer-component />
    </div>
  `,
  styles: ``
})
export class LoginPageComponent {

}
