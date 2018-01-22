/**
 * React-native App almundo.com
 * --
 * Alexander Forero L.
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation'; // Normalmente utilizo -> react-native-router-flux o el de Wix <-, pero hoy vámonos con este!! 

import HotelsList from './src/view/hotelsList'
import HotelProfileComponent from './src/view/hotelProfile'


/**
 * Clase para ejecutar el listado de hoteles (Home)
 * --------------------------------------------------
 * @class HotelProfile
 * @extends {Component}
 */
class App extends Component<{}> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HotelsList navigate={navigate} />
      </View>
    );
  }
}



/**
 * Clase para ejecutar el perfil de un hotel 
 * ------------------------------------------------
 * @class HotelProfile
 * @extends {Component}
 */
class HotelProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HotelProfileComponent />
      </View>
    );
  }
}



// ------------------------------------------------------------------
// ESTILOS!!
// ------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});



// ------------------------------------------------------------------
// Constante para ejecutar el modelo de navegación
// ------------------------------------------------------------------
const RootNavigator = StackNavigator({
  Home: {
    screen: App,
    navigationOptions : {
      headerTitle : 'Lista de hoteles',
      headerTintColor : 'white',
      headerStyle : {
        backgroundColor : '#EA494F'
      }
    }
  },
  
  Profile: {
    screen: HotelProfile,
    navigationOptions : {
      headerPressColorAndroid  : '#40C1A3',
      headerTintColor : 'white',
      headerStyle : {
        backgroundColor : 'transparent',
        top : 0,
        position : 'absolute',
        height : 50,
        width : '100%',
      }
    },
  },
  
});


export default RootNavigator;