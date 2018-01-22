import React from 'react';
import {View , Text, Image, TouchableOpacity} from 'react-native';


// LIBRERÍAS IMPORTADAS
import numeral from 'numeral'; // Formatear los precios


// COMPONENTES CREADOS
import Card from './card'; // Diseño del card para visualizar un hotel.
import CardSection from './cardSection'; // Contenido interno del card.


const HotelProfileComponent = (props) => {

    return(
        <View>
            <View style={{width : '100%' , height : 200,}} >
                <Image resizeMode={'cover'} style={{width:'100%' , height : '100%'}} source={{uri : 'http://www.chandrikahotel.com/images/slider/home/07.jpg'}} /> 
            </View>

            <View style={styles.card} >
                {/* Cabecera del card */}
                <View style={styles.headerCard} >
                    {/* parte izquierda */}
                    <View style={styles.info} >
                        <Text style={styles.hotelName} >Hotel Emperador</Text>
                        <Text style={styles.hotelCountry} >Colombia</Text>
                        <Text style={styles.hotelPhone}>(+57) 3151557</Text>
                    </View>
                    {/* parte derecha con precio */}
                    <View>
                        <Text style={styles.hotelPrice} >$65</Text>
                        <Text style={styles.hotelPriceDescription} >Noche</Text>
                    </View>
                </View>
                {/* Agendar hotel */}                
                <View style={styles.optionsCard} >
                    <Text style={styles.txtBook} >Reservar</Text>
                </View>
            </View>

            {/* Acerca de este hotel */}
            <View style={styles.card}>
                <View>
                    <Text style={styles.hotelName}>Acerca de este hotel</Text>
                    <Text style={styles.hotelCountry}>Descripción del hotel</Text>     
                </View>   
                {/* Agendar hotel */}                
                <View style={styles.optionsCard} >
                    <Text style={styles.txtBook} >Reservar</Text>
                </View>     
            </View>
        </View>
    );
};




// ---------------------------------------------
// ESTILOS (Sin importar Stylesheet)
// ---------------------------------------------

const styles = {

    // ----
    // - Card con los datos del hotel
    card : {
        borderRadius        : 5 ,
        width               : '100%' , 
        paddingHorizontal   : '5%', 
        backgroundColor     : 'white',
        marginBottom        : 12,
    },

    // ----
    // - Cabecera del card
    headerCard : {
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center', 
        paddingTop : 5
    },

    // ----
    // - Información que va dentro del card
    info : {
        flexDirection : 'column'
    },

    // ----
    // - "Botón" para reservar
    optionsCard : {
        paddingBottom : 20 , 
        marginTop : 15 , 
        paddingTop : 15, 
        borderTopColor : '#EEE' , 
        borderTopWidth : 1
    },

    // ----
    // - Nombre del hotel
    hotelName : {
        fontSize        : 17, // Tamaño de la fuente = 17
        color           : '#444', // Color = Gris oscuro
        fontWeight      : '500', // Peso-Grosor de la fuente = Casi Negrilla
        marginBottom    : 3, // Margen inferior = 3
        paddingTop      : 10,
    },

    // ----
    // - Nombre del hotel
    hotelCountry : {
        fontSize        : 15, // Tamaño de la fuente = 17
        color           : '#666', // Color = Gris oscuro
        fontWeight      : '400', // Peso-Grosor de la fuente = Casi Negrilla
        marginBottom    : 3, // Margen inferior = 3
    },

    // ----
    // - Nombre del hotel
    hotelPhone : {
        fontSize        : 16, // Tamaño de la fuente = 17
        color           : '#333', // Color = Gris oscuro
        fontWeight      : '300', // Peso-Grosor de la fuente = Casi Negrilla
        marginBottom    : 3, // Margen inferior = 3
    },

    // ----
    // - Nombre del hotel
    hotelPrice : {
        fontSize        : 20, // Tamaño de la fuente = 17
        color           : '#EA494F', // Color = Gris oscuro
        fontWeight      : '600', // Peso-Grosor de la fuente = Casi Negrilla
        textAlign       : 'center',        
    },

    // ----
    // - Nombre del hotel
    hotelPriceDescription : {
        fontSize        : 14, // Tamaño de la fuente = 17
        color           : '#333', // Color = Gris oscuro
        fontWeight      : '300', // Peso-Grosor de la fuente = Casi Negrilla
        textAlign       : 'center',
    },

    // ----
    // - Nombre del hotel
    txtBook : {
        fontSize        : 18, // Tamaño de la fuente = 17
        color           : '#EA494F', // Color = Gris oscuro
        fontWeight      : '300', // Peso-Grosor de la fuente = Casi Negrilla
    },

}

export default HotelProfileComponent;