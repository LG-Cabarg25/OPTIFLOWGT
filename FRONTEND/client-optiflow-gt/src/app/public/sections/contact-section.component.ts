import { FooterComponentComponent } from '@shared/components/footer-component.component';
import { Component } from '@angular/core';

@Component({
  selector: 'contact-section',
  imports: [FooterComponentComponent],
  standalone: true,
  template: `
  <footer id="contact" class="footer footer-center p-10">
    </footer>
    <footer-component/>
  `,
  styles: []
})
export class ContactSectionComponent {

}
