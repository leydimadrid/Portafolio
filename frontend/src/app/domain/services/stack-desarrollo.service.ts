import { Injectable } from '@angular/core';
import { Tecnologia } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class StackDesarrolloService {
  stackDesarrollo: Tecnologia[] = [
    { icono: '../../../assets/figma.svg', nombre: 'Figma', alt: 'Icono Figma' },
    { icono: '../../../assets/html5.svg', nombre: 'HTML5', alt: 'Icono HTML5' },
    {
      icono: '../../../assets/tailwind_css.svg',
      nombre: 'Tailwind CSS',
      alt: 'Icono Tailwind CSS',
    },
    { icono: '../../../assets/css3.svg', nombre: 'CSS3', alt: 'Icono CSS3' },
    {
      icono: '../../../assets/javascript.svg',
      nombre: 'JavaScript',
      alt: 'Icono JavaScript',
    },
    {
      icono: '../../../assets/reactJS.svg',
      nombre: 'React JS',
      alt: 'Icono React JS',
    },
    {
      icono: '../../../assets/angular.png',
      nombre: 'Angular 18',
      alt: 'Icono Angular 18',
    },
  ];

  constructor() {}
  getStackDesarrollo(): Tecnologia[] {
    return this.stackDesarrollo;
  }
}
