## Stack

Servidor backend con NestJS y Typescript

## Endpoint
El unico endpoint que tendra el servidor sera el siguiente:

GET /api/v1/elements

Debe correr en el puerto 3001

## Respuesta esperada

Crear un archivo json que sera un array en formato JSON, con datos mock no usaremos BBDD, el JSON debe tener la siguiente estructura.

[
  {
    "id": 1,
    "name": "Tony Stark",
    "alias": "Iron Man",
    "description": "Genius billionaire who built a powered armor suit to fight evil.",
    "category": "hero"
  }
]

El JSON puede tener uno o mas elementos.

## Requerimientos funcionales

- Servidor NestJS usando nestjs/cli
- Habilitar CORS la comunicacion sera de un proyecto en angular 19 (http://localhost:4200) hacia el servidor en NestJs (http://localhost:3001) 
- Manejo de errores para rutas inexistentes.
- Los objetos deben contener solamente (id, name, alias, description, category)

## Skills

Usa las skills de "nestjs-best-practices" para crear el proyecto, respetando la inyección de dependencias y la separación por módulos, controladores y servicios.

## Documentacion

Generar un README.md con:
- Como instalar dependencias 
- Levantar el proyecto
- Estructura general del proyecto.

## Importante

- No modificar la estructura de datos del endpoint.