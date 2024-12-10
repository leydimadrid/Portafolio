import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardProyectoComponent } from '../components/card-proyecto/card-proyecto.component';
import { FooterComponent } from '../footer/footer.component';
import { StackDesarrolloService } from '../services/stack-desarrollo.service';

import 'animate.css';
import { DownloadComponent } from '../components/download/download.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    CardProyectoComponent,
    FooterComponent,
    DownloadComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(public stackDesarrolloService: StackDesarrolloService) {}
}
