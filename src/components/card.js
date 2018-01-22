import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.containerStyle} >
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle : {
        borderWidth         : 1,
        borderRadius        : 5,
        borderColor         : '#DDD',
        borderBottomWidth   : 0,
        shadowColor         : '#000',
        shadowOffset        : {width : 0 , height : 2},
        shadowOpacity       : 0.05,
        shadowRadius        : 2,
        elevation           : 1,
        marginHorizontal    : '4%',
        marginTop           : 10, 
    }
}

export default Card;