import React from "react";
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';

const Card = ({imgPath, Date, Month, reason}) => {
    return (
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
            <ImageBackground source={imgPath}>
                <TouchableOpacity style={styles.item1}>
                    <Text style={styles.text}>{Date}</Text>
                    <Text style={styles.month}>{Month}</Text>
                    <Text style={styles.reason}>{reason}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    item1: {
        width: 150,
        height: 130,
        // backgroundColor: '#E6E6E6',
        justifyContent: 'flex-end',
        alignItems: 'left',
        borderRadius:10,
        padding: 12,
      },
      text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
      },
      month:{
        fontWeight: 'bold',
        color:'white'
      },
      reason:{
        fontWeight: 'bold',
        color:'white'
      },
})