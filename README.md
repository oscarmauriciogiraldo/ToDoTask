# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Reto de Codificación 

## Titulo: sistema de Gerstión de Tareas

  Contexto:

  Desarrollo de una aplicación de gestion de tareas, utilizando React 18 o supereiror, esta vermite a los usuarios ver, 
  crear, actualizar y eliminar tareas. 
  CRUD -> Create, Read, Update, Delete
  Esta aplicacion cuenta con diseño responsive.
  cuenta con gestion de estado.

  ### Requerimientos Funcionales:

    - Autenticacion: Los usuarios deben poder iniciar sesión utilizando un formulario de inicio de sesión
    que simula el envio de credenciales y la recepecion de JWT
    - Lista de Tareas: Mostrar una lista de tareas recuperadas de una Api simulada utilizando mocks
    ●	Creación de Tareas: Permitir a los usuarios crear nuevas tareas utilizando un formulario de creación de tareas.
    ●	Actualización de Tareas: Permitir a los usuarios actualizar el estado de una tarea (por hacer, en progreso, completada) utilizando un formulario de edición de tareas.
    ●	Eliminación de Tareas: Permitir a los usuarios eliminar una tarea.


  ### Requerimientos Técnicos: 
    ●	Arquitectura: Seguir una arquitectura limpia, separando claramente los componentes, servicios y estados de la aplicación, demostrando una buena organización de archivos, la separación de responsabilidades y la adherencia a principios de diseño como SOLID.
    ●	Patrones de Diseño: Aplicar patrones de diseño apropiados para separar las preocupaciones y facilitar la escalabilidad y mantenibilidad del código.
    ●	Gestión de Estado: Utilizar React, Redux, Zustand o MobX para la gestión de estados.
    ●	Pruebas Unitarias: Implementar pruebas unitarias para al menos el 70% del código usando Jest o React Testing Library.
    ●	Integración con Backend/APIs: Utilizar mocks para simular la integración con una API de tareas.
    ●	Publicación en GitHub: Publicar el código fuente en un repositorio de GitHub público, con instrucciones claras para ejecutar y probar la aplicación.

