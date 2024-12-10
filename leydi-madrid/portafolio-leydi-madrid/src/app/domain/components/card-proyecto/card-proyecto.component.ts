import { Component } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';


@Component({
  selector: 'app-card-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './card-proyecto.component.html',
  styleUrl: './card-proyecto.component.css'
})
export class CardProyectoComponent {
  constructor(public ProyectoService: ProyectoService) {
    
  }

}
