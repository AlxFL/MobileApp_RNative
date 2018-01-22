import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

    return (
        <View style={styles.containerStyle} >
            {props.children}
        </View>
    )
}


const styles = {
    containerStyle : {
        borderBottomWidth : 1,
        backgroundColor : '#FFF',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#DDD',
        width : '100%',
    }
}

export default CardSection