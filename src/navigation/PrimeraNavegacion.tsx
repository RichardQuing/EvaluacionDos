import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { InicioScreen } from '../screens/InicioScreen';
import { ImagenUnoScreen } from '../screens/ImagenUnoScreen';
import { ImagenDosScreen } from '../screens/ImagenDosScreen';
import { FormularioMayor } from '../screens/FormularioMayor';
import { FormularioMenor } from '../screens/FormularioMenor';

export type RootStackParamList = {
  InicioScreen: undefined,
  ImagenUnoScreen: undefined,
  ImagenDosScreen: undefined,
  FormularioMayor: undefined,
  FormularioMenor: undefined,
}

const Stack = createStackNavigator<RootStackParamList>();
export const PrimeraNavegacion = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="InicioScreen" options={{ title: 'Pantalla 1' }} component={InicioScreen} />
      <Stack.Screen name="ImagenUnoScreen" options={{ title: 'Pantalla 2' }} component={ImagenUnoScreen} />
      <Stack.Screen name="ImagenDosScreen" options={{ title: 'Pantalla 3' }} component={ImagenDosScreen} />
      <Stack.Screen name="FormularioMayor" options={{title: 'Pantalla 4'}} component={FormularioMayor} />
      <Stack.Screen name="FormularioMenor" options={{title: 'Pantalla 5'}} component={FormularioMenor} />
    </Stack.Navigator>
  );
}
