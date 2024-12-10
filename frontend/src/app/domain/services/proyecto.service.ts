import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  datosProyecto: Proyecto[] = [
    {
      id: 1,
      img: '../../../assets/estramipyme.jpg',
      titulo: 'Sitio web Estramipyme',
      descripcion:
        'Sitio web interactivo diseñado para evaluar pymes. El diseño se centra en la simplicidad y usabilidad.',
      tecnologias: [
        {
          icono: '../../../assets/angular.png',
          nombre: 'Angular 18',
          alt: 'Icono Angular 18',
        },
        {
          icono: '../../../assets/css3.svg',
          nombre: 'CSS3',
          alt: 'Icono CSS3',
        },
      ],
      github:
        'https://github.com/leydimadrid/RetoGrupo1/tree/main/reto1-estramypyme/angularReto1',
      url: 'https://estramipymeg1.netlify.app/inicio',
    },
    {
      id: 2,
      img: '../../../assets/lfdt.jpg',
      titulo: 'Sitio web La Finca de Todos',
      descripcion:
        'Diseño completo de la interfaz gráfica y desarrollo front-end para La Fundación La Finca de Todos.',
      tecnologias: [
        {
          icono: '../../../assets/reactJS.svg',
          nombre: 'React JS',
          alt: 'Icono React JS',
        },
        {
          icono: '../../../assets/tailwind_css.svg',
          nombre: 'Tailwind CSS',
          alt: 'Icono Tailwind CSS',
        },
      ],
      github: 'https://github.com/leydimadrid/sitio-web-la-finca-de-todos',
      url: 'https://www.lafincadetodos.com/#/inicio',
    },
    {
      id: 3,
      img: '../../../assets/todolist.jpg',
      titulo: 'To do list',
      descripcion:
        'Lista de tareas con un CRUD completo, crear, leer, actualizar, borrar y validación de campos vacíos.',
      tecnologias: [
        {
          icono: '../../../assets/reactJS.svg',
          nombre: 'React JS',
          alt: 'Icono React JS',
        },
        {
          icono: '../../../assets/tailwind_css.svg',
          nombre: 'Tailwind CSS',
          alt: 'Tailwind CSS',
        },
      ],
      github: 'https://github.com/leydimadrid/aplicacion-todo',
      url: 'https://listadetareas-crud.netlify.app/',
    },
    {
      id: 4,
      img: '../../../assets/store.jpg',
      titulo: 'Store, consumo API',
      descripcion:
        'Proyecto personal, practicando Angular 18, consumiendo una API.',
      tecnologias: [
        {
          icono: '../../../assets/angular.png',
          nombre: 'Angular 18',
          alt: 'Icono Angular 18',
        },
        {
          icono: '../../../assets/tailwind_css.svg',
          nombre: 'Tailwind CSS',
          alt: 'Icono Tailwind CSS',
        },
      ],
      github: 'https://github.com/leydimadrid/store-consumo-api',
      url: 'https://store-omega-black.vercel.app/',
    },
  ];

  constructor() {}

  getProyectos(): Proyecto[] {
    return this.datosProyecto;
  
  
  }
}
