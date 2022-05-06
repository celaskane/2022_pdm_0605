import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [cidade, setCidade] = useState('')
  const[previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  }
  const lang = 'pt_br'
  const units = 'metric'
  const cnt = 10
  const appid = '318b95979710913ce047b983f5578120'
  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?lang=${lang}&units=${units}&cnt=${cnt}&appid=${appid}&q=`

  return (
    <View style={styles.containerView}>
      <View style={styles.entradaView}>
        <TextInput 
          style={styles.cidadeTextInput} 
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button title="OK" />
      </View>
      <FlatList
        data={previsoes}
        renderItem={p => (
          <Text>{JSON.stringify(previsao)}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    padding: 40,
  },
  entradaView: {
    marginBottom: 8
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: '#FF9800',
    borderWidth: 2,
    marginBottom: 4
  }
});