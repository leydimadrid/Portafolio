import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardProyectoComponent } from '../components/card-proyecto/card-proyecto.component';
import { FooterComponent } from '../footer/footer.component';
import { StackDesarrolloService } from '../services/stack-desarrollo.service';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from "../contacto/contacto.component";
import 'animate.css'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CardProyectoComponent,
    FooterComponent,
    CommonModule,
    ContactoComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(public stackDesarrolloService: StackDesarrolloService) {}
}
