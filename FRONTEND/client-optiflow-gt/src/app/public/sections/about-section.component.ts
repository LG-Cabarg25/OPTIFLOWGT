import { Component } from '@angular/core';

@Component({
  selector: 'about-section',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="p-10">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 h-full"
      >
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
        >
          <h2 class="text-4xl justify-center lg:text-6xl font-semibold text-gradient mb-6">
            SOBRE MI
          </h2>
          <p class="text-lg lg:text-base lg:font-semibold text-white">
            Soy Luis Gustavo Cabrera Argueta, egresado con éxito del pensum de
            Ingeniería en Sistemas de la Universidad Mariano Gálvez (UMG). Mi
            enfoque se centra en proponer soluciones innovadoras y eficientes en
            cada proyecto en el que me involucro. Me considero una persona ávida
            de conocimiento, comprometida con mi crecimiento profesional y
            personal. Por ello, busco continuamente nuevas oportunidades para
            aprender y desarrollarme.
            <br />
            <br />
            Soy una persona dedicada y entregada en cada una de las labores que
            se me asignan. Valoro profundamente la responsabilidad y la lealtad,
            ya que considero que son fundamentales para lograr cada uno de los
            objetivos. Me gustan los retos, y la computación es una de mis
            grandes fortalezas, respaldada por diplomas que acreditan mis
            conocimientos en el área informática. Disfruto compartir con las
            personas y dedicar mi tiempo con esmero y respeto hacia ellas,
            siempre cumpliendo con lo asignado.
          </p>
        </div>
        <!-- Columna de la tarjeta -->
        <div class="flex justify-center lg:w-1/2">
          <div
            class="card w-full md:w-96 glass bg-gradient-to-br from-[#4ba5e0] via-[#8d94bc] to-[#b0c8e8] hover:bg-gradient-to-br hover:from-[#2bfd94] hover:via-[#70ffb9] hover:to-[#aeffd7] hover:border-blue-500"
          >
            <img
              src="img/perfilg.jpg"
              alt="El Mero Guss"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
   .text-gradient {
  background-image: linear-gradient(to right, #03B19D, #8EC74C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #03B19D;`,
})
export class AboutSectionComponent {}
