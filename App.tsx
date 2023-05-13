import {Component} from 'react';
import {View} from 'react-native';
import CalcIMC from './src/components/CalcIMC';

export default class App extends Component {
  render() {
    return (
      <View>
        <CalcIMC placeholder="Peso" placeholder2="Altura" />
      </View>
    );
  }
}
