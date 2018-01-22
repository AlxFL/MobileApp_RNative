import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { StackNavigator } from 'react-navigation'; // Normalmente utilizo -> react-native-router-flux o el de Wix <-, pero hoy vámonos con este!! 
import SearchInput, { createFilter } from 'react-native-search-filter'; // Un buscador cool e inteligente!
const KEYS_TO_FILTERS_HOTELS = ['name' , 'keywords' , 'price'];


// - Importando componentes propios
import HotelDetail from '../components/hotelDetail'


class HotelsList extends React.Component {

    static navigationOptions = {
        title: 'Home',
    }

    state = {
        hotels : [
            {
                name : 'Hotel emperador' , 
                stars : 3 , 
                images : [
                    {
                        name : "",
                        description : "",
                        link : "http://www.chandrikahotel.com/images/slider/home/07.jpg"
                    }
                ],
                description : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.', 
                keywords : 'hotel cantando bailar reir',
                price : 1500
            } , 
            {
                name : 'Hotel Hilton' , 
                stars : 1 ,
                description : 'Hola, yo soy la descripción',
                images : [
                    {
                        name : "",
                        description : "",
                        link : "https://www.atrapalo.com.co/hoteles/picture/l/351/0/8/376667872.jpg"
                    }
                ],
                keywords : 'hotel cantando',
                price : 2300
            }
        ],
        searchTerm : '',
    }

    componentWillMount () {}

    render ()
    {
        const filterHotels = this.state.hotels.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS_HOTELS))
        return (
            <View>
                <View>
                    <Image style={styles.iconSearch} source={require('../img/magnifying-glass.png')} />                
                    <SearchInput
                        style={styles.txtSearch}
                        value={this.state.searchTerm}
                        onChangeText={(term) => { this.setState({ searchTerm: term }) }}
                        placeholder={'Buscar nombre, precio, lugar'} placeholderTextColor={'#888'}
                        returnKeyType={'search'}
                    />
                </View>

                <ScrollView>
                    {/* -------------------------------------------------------------------
                        Muestro los resultados de búsqueda y al mismo tiempo voy filtrando.
                    -------------------------------------------------------------------- */}
                    {
                        filterHotels.map((hotel , index) => {
                            return ( 
                            <TouchableOpacity activeOpacity={0.7} key={index} navigate={this.props.navigate} onPress={() => this.props.navigate('Profile' , {name : 'Alex'})} >
                                <HotelDetail hotel={hotel} /> 
                            </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                    
            </View>
        )
    }

}






// ---------------------------------------------
// ESTILOS (Sin importar Stylesheet)
// ---------------------------------------------

const styles = {

    // ----    
    // - Barra : Buscador de hoteles
    txtSearch : { 
        paddingLeft         : 15, // 'Relleno - empuje' a la izquierda
        elevation           : 1, // Efecto de elevación
        fontSize            : 15, // Tamaño de la fuente : 15
        paddingVertical     : 10, // 'Relleno - empuje' Vertical
        color               : '#777', // Color gris intermedio para la letra
        borderWidth         : 0.75 , // Grosor de la línea que bordea el input
        borderColor         : '#DDD', // Color del borde, gris suave
        borderBottomWidth   : 0, // Sin grosor en el borde inferior
        shadowColor         : '#000', // Color de la sombre
        shadowOffset        : {width : 0 , height : 2}, // Efecto para que sobresalga el input
        shadowOpacity       : 0.05, // Opacidad - transparencia del color de la sombra
        shadowRadius        : 2, // Redondeo de la sombra
        marginBottom        : 7, // Margen inferior
        backgroundColor     : 'white', // Color del fondo
    },

    // ----    
    // - Icono que acompaña el input de búsqueda
    iconSearch : {
        width       : 17, //   
        height      : 17 , //  
        position    : 'absolute', //   
        top         : 10, //   
        right       : '4%', // 
        zIndex      : 99, //   
    }
}


export default HotelsList;