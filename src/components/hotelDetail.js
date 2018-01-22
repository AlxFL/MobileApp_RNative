import React from 'react';
import {View , Text, Image, TouchableOpacity} from 'react-native';


// LIBRERÍAS IMPORTADAS
import numeral from 'numeral'; // Formatear los precios



// COMPONENTES CREADOS
import Card from './card'; // Diseño del card para visualizar un hotel.
import CardSection from './cardSection'; // Contenido interno del card.


const HotelDetail = (props) => {

    var hotelStars = [];
    for(let i = 0; i < props.hotel.stars; i++){
		hotelStars.push(
            <Image key={i} style={styles.hotelCalification} source={require('../img/bookmark-star.png')} />
		)
    }
    
    return(
        <Card>
            <CardSection>
                <View style={styles.leftSection} >
                    <Image style={styles.hotelImage} resizeMode={'cover'} source={{uri : props.hotel.images[0].link}} />
                </View>
                <View style={styles.rightSection} >
                    <Text style={styles.hotelName} >{props.hotel.name}</Text>
                    <View style={styles.contentStars} >
                        {hotelStars}
                    </View>
                    <Text style={styles.hotelDescription} ellipsizeMode={'tail'} numberOfLines={3}>{props.hotel.description}</Text>
                    <View style={styles.contentPrice} >
                        <Text style={styles.hotelPrice} >USD {numeral(props.hotel.price).format('$ 0,0[.]00')}</Text>
                        <Text style={styles.hotelSubtitlePrice} >Por noche</Text>
                    </View>
                </View>
            </CardSection>
        </Card>
    );
};




// ---------------------------------------------
// ESTILOS (Sin importar Stylesheet)
// ---------------------------------------------

const styles = {

    // ----    
    // - Sección Izquierda del Card
    leftSection : {
        width   : '32%', // Ancho = 32%
        height  : 160, // Alto = 32%
    },

    // ----
    // - Imagen principal del hotel    
    hotelImage : {
        width                   : '100%', // Ancho = 100%
        height                  : '100%', // Alto = 100%
        borderTopLeftRadius     : 2, // Borde redondeado en la esquina superior izquierda
        borderBottomLeftRadius  : 2, // Borde redondeado en la esquina inferior izquierda
    },

    // ----
    // - Sección derecha del Card
    rightSection : {
        paddingVertical     : 10, // 'Relleno - empuje' Vertical
        paddingHorizontal   : 15, // 'Relleno - empuje' Horizontal
        width               : '68%', // Ancho = 68%
    },

    // ----
    // - Nombre del hotel
    hotelName : {
        fontSize        : 17, // Tamaño de la fuente = 17
        color           : '#444', // Color = Gris oscuro
        fontWeight      : '500', // Peso-Grosor de la fuente = Casi Negrilla
        marginBottom    : 3, // Margen inferior = 3
    },

    // ----
    // - Contenedor de las estrellas que califican al hotel
    contentStars : {
        flexDirection   : 'row', // Dirección de los componentes internos = Fila (Ubicación horizontal)
        width           : '100%' // Ancho = 100%
    },

    // ----
    // - Estrellas de calificación del hotel
    hotelCalification : {
        width        : 13 ,  // Ancho = 13
        height       : 13 , // Alto = 13
        marginRight  : 4, // Margen derecho = 4
    },

    // ----
    // - Descripción del hotel
    hotelDescription : {
        width       : '100%', // Ancho = 100%
        height      : 43, // Alto = 43
        fontSize    : 12, // Tamaño de la fuente = 12
        marginTop   : 10, // Margen superior = 10
    },

    // ----
    // - Contenedor del precio
    contentPrice : {
        marginTop       : 14, // Margen superior = 14
        width           : '100%', // Ancho = 100%
        alignItems      : 'flex-end', // Ubicación de su contenido = Alineado al final de la fila
    },

    // ----
    // - Precio de la noche en el hotel
    hotelPrice : {
        color       : '#333', // Color gris oscuro (Me gusta este tono!! Umm!)
        fontWeight  : '500', // Peso-Grosor de la fuente = Casi Negrilla
    },

    // ----
    // - Texto que acompaña el precio "Por noche"
    hotelSubtitlePrice : {
        fontSize : 10 , // Tamaño de la fuente = 10
        color : '#999' , // Color del texto, gris un poco suave
    }
}

export default HotelDetail;