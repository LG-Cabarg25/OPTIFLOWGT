import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [],
  template: `
    <aside class="flex items-center justify-center text-white text-center space-x-4 p-4">
  <a href="#">
    <img class="h-10" src="/img/logogt-whites.png" alt="GussLogo" loading="lazy" />
  </a>
  <p>© OPTIFLOWGT {{ year }}</p>
</aside>
  `,
  styles: ``
})
export class FooterComponentComponent {
  year: number = new Date().getFullYear();

}
