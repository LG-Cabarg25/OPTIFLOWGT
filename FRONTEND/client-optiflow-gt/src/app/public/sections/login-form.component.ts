import { Component } from '@angular/core';
import { FormLoginComponent } from '@public/components';

@Component({
  selector: 'login-form-sect',
  standalone: true,
  imports: [FormLoginComponent],
  template: `
<section id="about" class="p-20">
  <div
    class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 h-full"
  >
  <div
            class="profile flex flex-col justify-start shadow-secondary items-center self-center p-4 md:p-10  "
          >
            <img
              class="h-auto  rounded-md shadow-md relative z-10"
              width="600"
              height="275"
              src="/img/profile.png"
              alt="optiflowgt"
              loading="lazy"
            />
          </div>
    <div
      class="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
    >
      <div class="row items-center">
      <h2
        class="text-4xl justify-center lg:text-6xl font-semibold text-gradient mb-6 text-gradient"
      >
        OPTIFLOW-GT
      </h2>
        <div class="col">
          <form-login/>
        </div>
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
  `
})
export class LoginFormComponent {

}
