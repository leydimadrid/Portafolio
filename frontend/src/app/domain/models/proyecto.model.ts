export interface Tecnologia {
    icono: string;
    nombre: string;
    alt: string;
  }
  
  export interface Proyecto {
    id: number;
    img: string;
    titulo: string;
    descripcion: string;
    tecnologias: Tecnologia[];
    github: string;
    url: string;
  }