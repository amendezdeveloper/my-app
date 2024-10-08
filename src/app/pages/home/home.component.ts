import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { StickyComponent } from '../sticky/sticky.component';
import { CardsComponent } from '../cards/cards.component';
import { FeaturesComponent } from '../features/features.component';
import { HeadingsComponent } from "../headings/headings.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactFormComponent,
    StickyComponent,
    CardsComponent,
    FeaturesComponent, HeadingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
