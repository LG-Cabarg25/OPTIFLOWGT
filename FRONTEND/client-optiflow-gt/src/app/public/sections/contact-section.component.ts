import { Component } from '@angular/core';

@Component({
  selector: 'contact-section',
  standalone: true,
  template: `
          <footer id="contact" class="footer footer-center p-10  text-base-content rounded">
  <nav class="mb-6">
    <div class="grid grid-cols-5 gap-6">
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
    </div>
  </nav>
  <aside class="flex items-center justify-center text-white text-center space-x-4">
  <a href="#">
    <img class="h-10" src="/img/logogt-whites.png" alt="GussLogo" loading="lazy" />
  </a>
  <p>© OPTIFLOWGT {{ year }}</p>

</aside>
    </footer>
  `,
  styles: []
})
export class ContactSectionComponent {
  year: number = new Date().getFullYear();
}
