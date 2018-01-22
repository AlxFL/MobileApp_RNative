# API Rest en Node.js

Aplicación móvil para [almundo.com](https://almundo.com.co/) realizada con react-native para la visualización de hoteles.


## Tecnologías utilizadas

- [React-Native] - Framework de desarrollo para aplicaciones móviles híbridas. 

Una vez descargado el repositorio, es indispensable instalar todo los paquetetes de node que hacen parte de la ejecución del proyecto.

## Antes de comenzar

Es importante que primero, tengas creada una base de datos con el nombre : `db_alMundo`. En caso de tener una base de datos con otro nombre, es importante mencionarla en la **línea 6** del archivo `index.js`. 

## Ejecución local

Este producto se puede ejecutar de manera local gracias a un montaje de servidor que nos permite hacer express

## Instalación y uso

### Levantar el servidor

```sh
npm start
```

Es importante que el servidor nos de una respuesta positiva dentro de la consola, esto es gracias a nodemon.

```js
¡La conexión fue exitosa!
El servidor está corriendo en http://localhost:5000
```

## Levantar el servidor

Ahora el servidor ya está listo y funcionando. Entonces para hacer pruebas locales, podemos hacer uso de [postman](https://www.getpostman.com/) por ejemplo; para hacer las peticiones, consultas y manipulación de datos.

### Instrucciones básicas con Postman

Crear un nuevo hotel mediante el método **POST** :

```js
http://localhost:5000/API/saveHotel

'POST' : 
- name : String
- stars : Number
- nameImage : String
- linkImage : String
- Price : Number
```

Listar los hoteles mediante el método **GET** :

```js
http://localhost:5000/API/listHotels
```

Ver un hotel en particular mediante el método **GET** :

```js
http://localhost:5000/API/hotel/id_del_hotel
```

Actualizar un hotel mediante le método **PUT** :

```js
http://localhost:5000/API/updateHotel/id_del_hotel

'PUT' : 
- name : String
- stars : Number
- nameImage : String
- linkImage : String
- Price : Number
```

Eliminar un hotel mediante le método **DELETE** :

```js
http://localhost:5000/API/deleteHotel/id_del_hotel

```