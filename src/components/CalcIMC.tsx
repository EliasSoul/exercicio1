import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Style from '../styles/Style';

function CalcIMC(props: any) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const weightCalc = parseFloat(weight);
  const heightCalc = parseFloat(height);

  const result = weightCalc / (heightCalc * heightCalc);
  let classification = '';

  if (result < 18.5) {
    classification = 'Abaixo do Peso';
  } else if (result >= 18.5 && result <= 24.9) {
    classification = 'Peso Normal';
  } else if (result >= 25 && result <= 29.9) {
    classification = 'Acima do Peso';
  } else if (result >= 30 && result <= 39.9) {
    classification = 'Obeso';
  } else if (result >= 40) {
    classification = 'Obesidade Mórbida';
  }

  return (
    <>
      <Text style={Style.text}>Peso (Kg):</Text>
      <TextInput
        placeholder={props.placeholder}
        style={Style.input}
        value={weight}
        onChangeText={weight => setWeight(weight)}
      />
      <Text style={Style.text}>Altura (M): </Text>
      <TextInput
        placeholder={props.placeholder2}
        style={Style.input}
        value={height}
        onChangeText={height => setHeight(height)}
      />

      <TouchableOpacity
        style={Style.button}
        onPress={() =>
          Alert.alert(
            `Seu IMC é: ${result.toFixed(
              2,
            )}\nClassificação: ${classification}`,
          )
        }>
        <Text style={Style.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </>
  );
}

export default (props: any) => <>{CalcIMC(props)}</>;
