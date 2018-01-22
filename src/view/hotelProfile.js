import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// - Importando componentes propios
import HotelProfileComponent from '../components/hotelProfileComponent'
import { StackNavigator } from 'react-navigation'; // Normalmente utilizo -> react-native-router-flux o el de Wix <-, pero hoy vámonos con este!! 


class HotelProfile extends React.Component {

    componentWillMount(){
        console.log(this.props.navigate)
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


    render () {
        return (
            <View>
                <HotelProfileComponent id={'asd'} />
            </View>
        )
    }
}

export default HotelProfile;
