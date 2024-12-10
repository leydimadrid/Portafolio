# Portafolio
Portafolio 

Taller: Desarrollo de un Portafolio en Angular

Objetivo:
El objetivo de este taller es desarrollar un portafolio personal utilizando Angular (versiones 17 o 18) se deberá crear una aplicación que muestre proyectos, habilidades y datos de contacto, utilizando componentes reutilizables que se comuniquen entre sí. Además, deberá configurar la navegación y se debe manejar la presentación dinámica de contenido mediante JsonServer

Requerimientos del Taller:
- La aplicación debe ser un portafolio personal que incluya al menos tres secciones principales: `Proyectos`, `Habilidades`, y `Contacto`.
- Debe incluir al menos tres componentes reutilizables: `navbar`, `footer`, y `main-content`.
- Los componentes deben comunicarse entre sí para compartir datos.
- Se debe configurar la navegación entre las diferentes secciones del portafolio.
- Los datos de los proyectos y habilidades deben ser cargados dinámicamente desde un backend simulado utilizando `json-server`.



 1. Crear un Nuevo Proyecto Angular

Comando:
```bash
ng new mi-portafolio
```

Descripción:
Este comando crea un nuevo proyecto Angular con la estructura básica necesaria para comenzar a desarrollar tu portafolio.

---

2. Generar los Componentes Reutilizables

Comandos:
```bash
ng generate component navbar
ng generate component footer
ng generate component main-content
ng generate component proyectos
ng generate component habilidades
ng generate component contacto
```

Descripción:
Genera los siguientes componentes:
- `navbar`: Para la barra de navegación.
- `footer`: Para el pie de página.
- `main-content`: Para mostrar el contenido principal basado en la navegación.
- `proyectos`: Para listar y mostrar detalles de los proyectos.
- `habilidades`: Para mostrar las habilidades personales o técnicas.
- `contacto`: Para un formulario de contacto.

3. Configurar la Comunicación entre Componentes

Actividades:
- En el componente `navbar`, crea un menú de navegación que permita a los usuarios moverse entre las secciones `Proyectos`, `Habilidades`, y `Contacto`.
- Utiliza `@Input` y `@Output` para permitir que `navbar` y `main-content` se comuniquen, por ejemplo, para cambiar el contenido mostrado.
- En el componente `footer`, muestra información estática o enlaces relevantes, como redes sociales o derechos de autor.

 4. Configurar Enrutamiento y Navegación

Comando:
```bash
ng generate module app-routing --flat --module=app
```

Actividades:
- Configura el enrutamiento para navegar entre las secciones del portafolio (`Proyectos`, `Habilidades`, `Contacto`).
- Define las rutas en `app-routing.module.ts` y asocia cada ruta a su componente correspondiente (`proyectos`, `habilidades`, `contacto`).

5. Manejo de Formularios Reactivos en la Sección de Contacto

Actividades:
- En el componente `contacto`, crea un formulario reactivo utilizando `ReactiveForms`.
- Agrega validaciones al formulario para campos como nombre, correo electrónico, y mensaje.
- Configura un servicio para enviar los datos del formulario a una API simulada o simplemente mostrar una confirmación de envío en pantalla.


6. Configuración de json-server para Simular una API

Comandos:
```bash
npm install -g json-server
touch db.json
json-server --watch db.json
```

Actividades:
- Crea un archivo `db.json` con datos simulados para tus proyectos y habilidades. Por ejemplo:
  ```json
  {
    "proyectos": [
      { "id": 1, "nombre": "Proyecto 1", "descripcion": "Descripción del proyecto 1", "url": "https://mi-proyecto-1.com" },
      { "id": 2, "nombre": "Proyecto 2", "descripcion": "Descripción del proyecto 2", "url": "https://mi-proyecto-2.com" }
    ],
    "habilidades": [
      { "id": 1, "habilidad": "Angular", "nivel": "Avanzado" },
      { "id": 2, "habilidad": "JavaScript", "nivel": "Avanzado" }
    ]
  }
  ```
- Inicia `json-server` para que actúe como backend de tu portafolio.


 7. Integrar Datos desde json-server

Actividades:
- Utiliza el servicio `HttpClient` para obtener datos desde `json-server` y mostrarlos en las secciones `proyectos` y `habilidades`.
- En `proyectos`, muestra una lista de tus proyectos con la posibilidad de ver más detalles al hacer clic.
- En `habilidades`, muestra una lista de tus habilidades y niveles de competencia.

Ejemplo:
- Muestra una lista de proyectos en `proyectos` obtenidos desde la API simulada.
- Permite filtrar proyectos según categorías o tecnologías utilizadas (opcional).


Criterios de Evaluación:
- La aplicación debe tener los tres componentes (navbar, footer, main-content) correctamente implementados y comunicándose entre sí.
- La navegación entre las secciones del portafolio debe funcionar correctamente.
- Los datos de proyectos y habilidades deben cargarse dinámicamente desde `json-server`.
- El formulario de contacto debe estar implementado y funcional, con validaciones adecuadas.
