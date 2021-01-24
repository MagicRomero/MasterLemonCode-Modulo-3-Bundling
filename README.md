# Master Front End IX - Laboratorio - Módulo 3 - Bundling

### Antes de empezar

El proyecto contiene dependencias de desarrollo que necesitarás instalar una vez clones el repositorio, simplemente ejecuta:

```sh
npm install
```

## Scripts del proyecto

En el `package.json` se encuentran los scripts que levantan nuestro servidor de desarrollo, crean nuestra build de producción y checkean los tipos en nuestro proyecto:

```json
{
  "scripts": {
    "type-check": "tsc --noEmit",
    "type-check:watch": "npm run type-check -- --watch",
    "dev-server": "cross-env NODE_ENV=development webpack serve",
    "start": "cross-env NODE_ENV=production webpack "
  }
}
```

## Características de esta configuración de webpack

- Usa la variable de entorno **_NODE_ENV_** para definir opciones de producción y desarrollo
- Permite utilizar typescript en todo nuestro proyecto
- Se habilita el uso de paths personalizados para acceder a las carpetas de nuestro proyecto y evitar importaciones relativas como esta **'import library from '../../../lib/library'** y utilizar esta **import library from '@lib/library**
- Se optimiza en producción el código para distribuirlo en chunks y hashear nuestros archivos, esto evita que si hacemos un nuevo deploy en producción no habría que limpiar caché en el navegador del usuarior para utilizar los nuevos cambios y permite cargar solo el código javascript que necesite cada parte de la aplicación.
- Servidor de desarrollo con HMR (Hot module replacement) listo para usar con React _(no es un requisito obligatorio usar React)_
- Se utiliza PostCSS para utilizar las últimas características del lenguaje
- Se habilitan CSS modules
- Babel actualizado a la última versión para habilitar las nuevas características del lenguaje Javascript
- Se optimizan las imágenes con formatos jpeg, png, gif, svg
- Se pueden cargar fuentes con formatos ttf, ttf2. woff, woff2, eot
- Utiliza BundleAnalyzerPlugin que nos permite ver el tamaño de todas las partes de nuestro bundle final, por defecto se visualiza en el puerto 8888
