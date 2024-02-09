import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/PrimeraNavegacion';
import { ButtonComponents } from '../components/TouchableOpacity';
import { CommonActions } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParamList, 'InicioScreen'> { };

export const InicioScreen = ({ navigation }: Props) => {
  return (
    <View>
    
      
      <Text style={styles.textBig}>BIENVENIDO</Text>
     
      <TouchableOpacity 
                    onPress={()=>navigation.navigate('ImagenUnoScreen')}>
                    <Text style={styles.textButoon}>Imagen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity 
                    onPress={()=>navigation.navigate('ImagenDosScreen')}>
                    <Text style={styles.textButoon}>Imagen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity 
                    onPress={()=>navigation.navigate('FormularioMayor')}>
                    <Text style={styles.textButoon}> {'>='} </Text>
      </TouchableOpacity>
      <TouchableOpacity 
                    onPress={()=>navigation.navigate('FormularioMenor')}>
                    <Text style={styles.textButoon}>{'<='}</Text>
      </TouchableOpacity>
      
</View>
  )
}
