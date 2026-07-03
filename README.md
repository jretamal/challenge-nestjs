# Challenge NestJS - Servidor Backend

Este proyecto es un servidor backend desarrollado con **NestJS** y **TypeScript**, diseñado para responder al desafío técnico siguiendo las mejores prácticas especificadas.

## Requerimientos Implementados

- **Puerto**: El servidor corre en el puerto `3001`.
- **Endpoint**: `GET /api/v1/elements` el cual retorna un array JSON de elementos mock.
- **CORS**: Habilitado específicamente para un proyecto frontend en Angular 19 corriendo en `http://localhost:4200`.
- **Estructura del Proyecto**: Organizado por módulos, servicios y controladores.
- **Manejo de Errores**: Implementado un filtro de excepciones global para formatear errores y manejar de forma limpia rutas inexistentes (404) con un mensaje amigable y estructurado.

---

## Estructura del Proyecto

El código fuente está estructurado de la siguiente manera:

```
challenge-nestjs/
├── docs/                      # Documentación y enunciados del desafío
├── src/
│   ├── common/
│   │   └── filters/
│   │       └── http-exception.filter.ts # Filtro global para manejo estructurado de errores (p. ej. rutas inexistentes)
│   ├── elements/
│   │   ├── data/
│   │   │   └── elements.json            # Datos mock de los elementos en formato JSON
│   │   ├── interfaces/
│   │   │   └── element.interface.ts     # Definición de la interfaz del elemento
│   │   ├── elements.controller.ts       # Controlador que expone el endpoint GET /elements (con prefijo global /api/v1)
│   │   ├── elements.module.ts           # Módulo encapsulado de elementos
│   │   ├── elements.service.ts          # Servicio que lee y sirve los datos mock
│   │   ├── elements.controller.spec.ts  # Pruebas unitarias del controlador
│   │   └── elements.service.spec.ts     # Pruebas unitarias del servicio
│   ├── app.module.ts          # Módulo principal (AppModule) que importa ElementsModule
│   └── main.ts                # Archivo de inicio del servidor (Configura CORS, puerto 3001, prefijo global y filtros)
├── test/
│   └── app.e2e-spec.ts        # Pruebas de integración de extremo a extremo (E2E)
└── tsconfig.json              # Configuración de TypeScript (con resolveJsonModule para importación directa del JSON)
```

---

## Cómo Instalar las Dependencias

Antes de levantar el proyecto, instala las dependencias ejecutando el siguiente comando en la raíz del proyecto:

```bash
npm install
```

---

## Levantar el Proyecto

Puedes iniciar el servidor utilizando los siguientes comandos:

```bash
# Modo desarrollo (con recarga automática ante cambios)
npm run start:dev

# Modo producción (compila y ejecuta desde la carpeta dist)
npm run build
npm run start:prod
```

Una vez levantado, el endpoint estará disponible en:
[http://localhost:3001/api/v1/elements](http://localhost:3001/api/v1/elements)

---

## Pruebas (Testing)

El proyecto cuenta con suites de pruebas unitarias y e2e listas para ejecutar:

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas E2E (de extremo a extremo)
npm run test:e2e
```
