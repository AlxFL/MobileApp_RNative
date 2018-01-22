# Aplicación Móvil con React-Native

Aplicación móvil para [almundo.com](https://almundo.com.co/) realizada con react-native para la visualización de hoteles.


## Tecnologías utilizadas

- [React-Native] - Framework de desarrollo para aplicaciones móviles híbridas.
- [axios] - Manejador de peticiones HTTP para las conexiones con el API.
- [numeral] - Formateador de números para presentar el precio del hotel.
- [react-native-search-filter] - Buscador en tiempo real que reduce los resultados de búsqueda a medida que voy escribiendo.
- [ReactNavigation] - Librería para navegar entre pantallas.

> **Nota importante** : Desafortunadamente tuve un inconveniente con el servidor en donde tengo alojado mi API (está en Heroku), la base de datos y toda la información está bien, pero me sale ahora un error que ya no alcanzo a solucionar y pues me veo obligado a dejar la información estática. Yo sé que esta es la pieza clave del ejercicio y me tomo el atrevimiento de pasar por esta arbitrariedad para compartirles un producto funcional y continuar con el resto del ejercicio. (Sin embargo, al final incluí los métodos que utilicé para manipular la info con el API)

## Instalar react-native

Lo primero y más importante para poder ejecutar este ejercicio es tener instalado react-native, a continuación están los comandos para llevar a cabo su instalación.

```sh
npm install -g react-native-cli
npm install -g yarn
```

## Clonar el proyecto

Como primera medida, es importante tener instalado [Git](https://git-scm.com/) en tu computador para poder bajar y ejecutar el proyecto. Cuando lo tengas instalado ejecuta el siguiente comando para descargar el repositorio:

```sh
git clone https://github.com/AlxFL/MobileApp_RNative.git
```

Una vez descargado el repositorio, es indispensable instalar todo los paquetetes de node que hacen parte de la ejecución del proyecto.

```sh
npm install
```

## Instalación y uso

### Levantar el servidor

Luego de tener el proyeto descargado. Ejecuta el siguiente comando para levantar el servidor de react-native

```sh
react-native start
```

Paralelamente a esto, debes ejecutar el comando para instalar y trabajar con el app en tu dispositivo móvil.

```sh
react-native run-android
react-native run-ios
```

## Ejecuciones con axios para la manipulación HTTP

Como lo mencioné anteriormente, se me presentó un problema con el servidor que en este momento desconozco. Por este motivo, adjunto los métodos que utilicé en la conexión HTTP para hacer las peticiones.

### Listar  hoteles para pintarlos en el home

```js
axios.get('https://infinite-everglades-48845.herokuapp.com/API/listHotels')
.then((response) => {
    this.setState({ hotels : response.data})
    console.log(response.data);
  })
  .catch((error) => {
    Alert.alert('Error' , 'No se han podido cargar los hoteles, inténtalo nuevamente.')          
    console.log(error);
  });

```

### Entrar a ver un hotel

```js
axios.get('https://infinite-everglades-48845.herokuapp.com/API/hotel/' + this.state.idHotelSelected)
.then((response) => {
    this.setState({ hotels : response.data})
    console.log(response.data);
  })
  .catch((error) => {
    Alert.alert('Error' , 'No se han podido cargar el hotel, inténtalo nuevamente.')          
    console.log(error);
  });

```
