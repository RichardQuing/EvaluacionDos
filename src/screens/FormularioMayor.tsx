import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const FormularioMayor = () => {
  const navigation = useNavigation();
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const validacion = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

      if (parsedNum1 > parsedNum2) {
        setResult(`${parsedNum1} ES MAYOR `);
      } else if (parsedNum1 < parsedNum2) {
        setResult(`${parsedNum2} ES MAYOR `);
      } else {
        setResult(`${parsedNum1} Y ${parsedNum2} SON IGUALES `);
      } 
   
    
  };
  return (
    <View>
      <Text style={styles.textBig}>MAYOR QUE</Text>
      <View >
        <Text style={styles.titleNormal}>Campo 1:</Text>
        <TextInput style={styles.textCampo}
          keyboardType="numeric"
          value={num1}
          onChangeText={(text) => setNum1(text)}
        />
      </View>
      <View>
        <Text style={styles.titleNormal}>Campo 2:</Text>
        <TextInput
          style={styles.textCampo}
          keyboardType="numeric"
          value={num2}
          onChangeText={(text) => setNum2(text)}
        />
      </View>

      <TouchableOpacity
        onPress={validacion}>
        <Text style={styles.textButoon}>{'>='}</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titleResultado}>{result}</Text>
      </View>
    </View>
  );
};

