import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {

}
