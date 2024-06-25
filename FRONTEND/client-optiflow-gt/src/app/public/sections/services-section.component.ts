import { Component } from '@angular/core';

@Component({
  selector: 'services-section',
  standalone: true,
  imports: [],
  template: `
          <section id="services" class="p-10">
          <div
    class="flex flex-col items-center justify-center lg:items-center gap-2 pb-2 lg:pb-16 h-full"
  >
    <h2 class="text-4xl text-center lg:text-6xl font-semibold text-gradient">
      SERVICIOS
    </h2>
    <p class="text-lg text-center lg:text-base lg:font-semibold text-white">
      Otros sistemas disponibles
    </p>
  </div>
  <div class="flex flex-wrap justify-center mt-1 ">
    <div
      class="card bg-[#B3EEE7] shadow-xl mr-4 mb-4 flex-shrink-0 w-72 shadow-primary/60 order-1"
    >
      <figure class="px-10 pt-10 transition-transform duration-300 transform hover:scale-110">

      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary/90">OPTIFLOWGT</h2>
        <p>Sistema de automatización de procesos de: Asistencia y Control de medidas corporales de árbitros de futbol, con escalabilidad de adaptación a otros procesos. </p>
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
  `,
})
export class ServicesSectionComponent {

}
