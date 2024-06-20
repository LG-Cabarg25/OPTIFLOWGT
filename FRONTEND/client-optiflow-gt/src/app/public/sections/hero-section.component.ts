import { RouterLink } from '@angular/router';
import { Component, signal } from '@angular/core';

interface HeroBut1{
  label: string;
  routeb: string;
}
interface HeroBut2{
  label: string;
  routeb: string;
}
@Component({
  selector: 'hero-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="hero" class="lg:mt-24">
      <div
        class="p-10 grid grid-cols-1 justify-center lg:justify-center lg:grid-cols-2 gap-4 sm:gap-20 animate-slide-in-left content-end"
      >
        <div class=" order-1 lg:order-2">
          <h4
            class=" mt-2 text-1xl text-left font-bold sm:text-2xl lg:text-3xl mb-6 text-gradient"
          >
            Bienvenidos...
          </h4>
          <h1
            class="mt-1 text-3xl text-left  sm:text-4xl lg:text-6xl mb-6 text-white"
          >
            OPTIFLOW-GT
          </h1>
          <h2
            class="mt-1 text-2xl text-left font-bold sm:text-4xl lg:text-5xl mb-6 text-gradient "
          >
            Tu solución automatizada.
          </h2>
          <article class="space-y-4 text-base md:text-lg text-white">
            <p>
              Servicio pensado en agilizar el control de Asistencia y Medidas
              corporales de los atletas.
            </p>
          </article>
          <div class="content-start p-2">
          @for (item of heroItems1(); track item){
            <button
              class="btn p-6 text-white content-center bg-gradient-to-r from-[#03B19D] to-[#8EC74C] rounded-full text-xl"
            >
            <a [href]="item.routeb">{{ item.label }}</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="#FFFFFF"
                viewBox="0 0 512 512"
                stroke="white"
              >
                <g>
                  <path
                    d="M185.9,272.4c-57.4,0-104.1-46.7-104.1-104.1S128.5,64.2,185.9,64.2S290,110.9,290,168.3   S243.3,272.4,185.9,272.4z M185.9,85.3c-45.8,0-83,37.2-83,83s37.2,83,83,83s83-37.2,83-83S231.7,85.3,185.9,85.3z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M361.3,447.8c-5.8,0-10.5-4.7-10.5-10.5c0-90.9-73.9-164.8-164.8-164.8S21.1,346.3,21.1,437.2   c0,5.8-4.7,10.5-10.5,10.5S0,443,0,437.2c0-102.5,83.4-185.9,185.9-185.9s185.9,83.4,185.9,185.9   C371.8,443,367.1,447.8,361.3,447.8z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M501.5,239.7H337.8c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5h163.7c5.8,0,10.5,4.7,10.5,10.5   S507.3,239.7,501.5,239.7z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M419.6,321.5c-5.8,0-10.5-4.7-10.5-10.5V147.3c0-5.8,4.7-10.5,10.5-10.5c5.8,0,10.5,4.7,10.5,10.5V311   C430.2,316.8,425.4,321.5,419.6,321.5z"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </button>}
            @for (item of heroItems2(); track item){
            <button  class="btn btn-active btn-link text-white p-8 text-xl">
            <a [href]="item.routeb">{{ item.label }}</a>
            </button>}
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-12 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="/img/perfilg.jpg"
                />
              </div>
            </div>
            <div class="chat-bubble bg-info">
              "Cree en ti mismo y alcanzarás tus objetivos."
            </div>
          </div>
        </div>
        <div
          class="profile flex justify-center lg:justify-center mask mask-squircle  relative order-2 lg:order-2 bg-gradient-to-r from-[#0E216C] to-[#020831]"
        >
          <div
            class="profile flex flex-col justify-start shadow-secondary items-center self-center p-4 md:p-10  "
          >
            <img
              class="h-auto rounded-md shadow-md relative z-10"
              width="425"
              height="275"
              src="/img/profile.png"
              alt="optiflowgt"
              loading="lazy"
            />
          </div>
          <!-- <div class="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              class="w-20 h-20 rounded-full border-2 border-white shadow-md"
              src="/img/icon5.png"
              alt="Avatar 5"
            />
          </div> -->
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
export class HeroSectionComponent {
  public heroItems1 = signal<HeroBut1[]>([
    {
      label: 'Registrarse',
      routeb: '/register',
    },
  ])
  public heroItems2 = signal<HeroBut2[]>([
    {
      label: 'Iniciar Sesión',
      routeb: '/login',
    },
  ])
}
