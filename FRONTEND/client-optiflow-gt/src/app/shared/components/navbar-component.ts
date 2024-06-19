import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

interface Menu {
  label: string;
  url: string;
}

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div
      [class.fixed]="isFixed"
      [class.scrolled]="showWhiteBackground()"
      class="navbar text-white"
    >
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-[#020831] to-[#0E216C] rounded-box w-52"
          >
            @for (item of navbarItems(); track item) {
            <li>
              <a [href]="item.url">{{ item.label }}</a>
            </li>
            }
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">OPTIFLOW-GT</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          @for (item of navbarItems(); track item) {
          <li>
            <a [href]="item.url">{{ item.label }}</a>
          </li>
          }
        </ul>
      </div>
      <div class="navbar-end p-4">
        <button class="btn btn-ghost text-white">
          Iniciar Sesión
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="white"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              clip-rule="evenodd"
              d="M14.5 13H2.5V11H14.5V13Z"
              fill="white"
              fill-rule="evenodd"
            />
            <path
              clip-rule="evenodd"
              d="M11.7072 7.79291L15.2072 11.2929C15.5977 11.6834 15.5977 12.3166 15.2072 12.7071L11.7072 16.2071L10.293 14.7929L13.0859 12L10.293 9.20712L11.7072 7.79291Z"
              fill="white"
              fill-rule="evenodd"
            />
            <path
              clip-rule="evenodd"
              d="M13.5004 5C10.7828 5 8.4252 6.54837 7.26472 8.81567L5.48438 7.90442C6.97351 4.995 10.0031 3 13.5004 3C18.471 3 22.5004 7.02944 22.5004 12C22.5004 16.9706 18.471 21 13.5004 21C10.0031 21 6.97351 19.005 5.48438 16.0956L7.26472 15.1843C8.4252 17.4516 10.7828 19 13.5004 19C17.3664 19 20.5004 15.866 20.5004 12C20.5004 8.13401 17.3664 5 13.5004 5Z"
              fill="white"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .navbar {
        transition: background-color 0.3s ease;
      }
      .navbar.fixed {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
      }
      .navbar.scrolled {
        color: white;
      }
      .section {
        padding-top: 80px; /* Adjust this value to the height of your navbar */
      }
    `,
  ],
})
export class NavbarComponent {
  public navbarItems = signal<Menu[]>([
    {
      label: 'Inicio',
      url: '',
    },
    {
      label: 'Nosotros',
      url: '#about',
    },
    {
      label: 'Servicios',
      url: '#services',
    },
    {
      label: 'Contacto',
      url: '#contact',
    },
  ]);

  public isFixed = true;
  public showWhiteBackground = signal<boolean>(false);

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 50) {
      this.showWhiteBackground.set(true);
    } else {
      this.showWhiteBackground.set(false);
    }
  }
}
