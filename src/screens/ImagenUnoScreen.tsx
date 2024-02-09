import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

export const ImagenUnoScreen = () => {
    const navigation = useNavigation();

    return (
        <View >
            <Text style={styles.textBig}>PROGRAMACION</Text>
            <Image style={styles.avatar}
                source={{
                    uri: 'https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg'
                }}
                 />
                  <View>
                <TouchableOpacity 
                    onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ImagenDosScreen'}))}>
                    <Text style={styles.textButoon}>Imagen 2</Text>
                </TouchableOpacity>
                </View>
                 
        </View>
    )
}
