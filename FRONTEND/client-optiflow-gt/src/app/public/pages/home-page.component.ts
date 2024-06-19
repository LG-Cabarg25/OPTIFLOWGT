import { NavbarComponent } from './../../shared/components/navbar-component';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutSectionComponent, ContactSectionComponent, HeroSectionComponent, ServicesSectionComponent } from '@public/sections';

interface menu {
  label: string;
  url: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, AboutSectionComponent, ContactSectionComponent, HeroSectionComponent, ServicesSectionComponent],
  template: `
    <div class="bg-gradient-to-r from-[#020831] to-[#0E216C]">
      <navbar-component/>
      <hero-section class="p-1"/>
      <about-section/>
      <services-section/>
      <contact-section />
    </div>
  `,
  styles: [

  ],
})
export class HomePageComponent {}
