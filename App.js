import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [gasPrice, setGasPrice] = useState('');
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [result, setResult] = useState('');

  const comparePrices = () => {
    const gasValue = parseFloat(gasPrice);
    const ethanolValue = parseFloat(ethanolPrice);
    const ethanolPercentage = (ethanolValue / gasValue) * 100;

    if (ethanolPercentage < 70) {
      setResult('É melhor comprar Alcool.');
    } else {
      setResult('É melhor comprar gasolina.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Preço da Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasPrice}
        onChangeText={setGasPrice}
      />

      <Text style={styles.label}>Preço do Etanol:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={ethanolPrice}
        onChangeText={setEthanolPrice}
      />

      <Button title="Comparar Preços" onPress={comparePrices} />

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'lightgray' ,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
	   backgroundColor : 'red' ,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
   
    fontSize: 22,
    marginTop: 18,
  },
});

export default App;