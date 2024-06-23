import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [],
  template: `
<footer class="footer items-center p-8  text-neutral-content">
  <aside class="items-center grid-flow-col text-white ">
  <a href="#">
    <img class="h-10" src="/img/logogt-whites.png" alt="GussLogo" loading="lazy" />
  </a>
    <p>Copyright © OPTIFLOWGT {{ year }}</p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <a href="mailto:lgcabarg25@gmail.com?subject=¡Trabajemos Juntos!" target="_blank" class="rounded-lg p-2 inline-block transition-all duration-100 ease-in-out border-2 border-transparent hover:border-[#7dd3fc] hover:scale-110 flex-col sm:flex-row">
        <img  src="/icon/email.svg" height="35" width="35" alt="fb" loading="lazy">
      </a>
      <a href="https://x.com/GusTavo84722215?t=Tj9xyLaCS5iCCwx6KIenxA&s=09" target="_blank" class="rounded-lg p-2 inline-block transition-all duration-100 ease-in-out border-2 border-transparent hover:border-[#7dd3fc] hover:scale-110 flex-col sm:flex-row">
        <img src="/icon/x.svg" height="35" width="35" alt="x" loading="lazy">
      </a>
      <a href="https://www.facebook.com/profile.php?id=61553444966099&mibextid=ZbWKwL" target="_blank" class="rounded-lg p-2 inline-block transition-all duration-100 ease-in-out border-2 border-transparent hover:border-[#7dd3fc] hover:scale-110 flex-col sm:flex-row">
        <img  src="/icon/facebook.svg" height="35" width="35" alt="fb" loading="lazy">
      </a>
      <a href="https://www.instagram.com/guscabarg?igsh=cngydjBwZnkxeWh1" target="_blank" class="rounded-lg p-2 inline-block transition-all duration-100 ease-in-out border-2 border-transparent hover:border-[#7dd3fc] hover:scale-110 flex-col sm:flex-row">
        <img src="/icon/instagram.svg" height="35" width="35" alt="ig" loading="lazy">
      </a>
      <a href="https://youtube.com/@luisgustavocabreraargueta9851?si=Zn5HnORRqRiFmJO4" target="_blank" class="rounded-lg p-2 inline-block transition-all duration-100 ease-in-out border-2 border-transparent hover:border-[#7dd3fc] hover:scale-110 flex-col sm:flex-row">
        <img src="/icon/youtube.svg" height="35" width="35" alt="you" loading="lazy">
      </a>
  </nav>
</footer>
  `,
  styles: ``
})
export class FooterComponentComponent {
  year: number = new Date().getFullYear();

}
