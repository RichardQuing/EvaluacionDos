import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

export const ImagenDosScreen = () => {
  const navigation = useNavigation();

  return (
      <View >
          <Text style={styles.textBig}>APLICACIONES</Text>
          <Image style={styles.avatar}
              source={{
                  uri: 'https://edteam-media.s3.amazonaws.com/blogs/original/11089cb5-4136-4a47-9c33-20394e49e496.jpg'
              }}
               />
                <View>
                <TouchableOpacity 
                    onPress={()=>navigation.dispatch(CommonActions.navigate({name:'FormularioMayor'}))}>
                    <Text style={styles.textButoon}>{'>='}</Text>
                </TouchableOpacity>
                </View>
               
      </View>
  )
}
