import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [distancia, setDistancia] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularVantagem = () => {
    const alcool = parseFloat(precoAlcool);
    const gasolina = parseFloat(precoGasolina);
    const distanciaPercorrida = parseFloat(distancia);

    // Verifica se os valores são válidos
    if (!isNaN(alcool) && !isNaN(gasolina) && !isNaN(distanciaPercorrida)) {
      const relacao = alcool / gasolina;

      if (relacao < 0.7) {
        setResultado('Abasteça com Álcool');
      } else {
        setResultado('Abasteça com Gasolina');
      }
    } else {
      setResultado('Por favor, insira valores válidos');
    }
  };

  const limparCampos = () => {
    setPrecoAlcool('');
    setPrecoGasolina('');
    setDistancia('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina?</Text>

      <Image
        source={{ uri: 'https://images.tcdn.com.br/img/img_prod/845049/bomba_de_combustivel_wayne_helix_1000_157_1_20201125075417.png' }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool (R$/litro)"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={(text) => setPrecoAlcool(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$/litro)"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={(text) => setPrecoGasolina(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Distância a percorrer (km)"
        keyboardType="numeric"
        value={distancia}
        onChangeText={(text) => setDistancia(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calcularVantagem}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.clearButton} onPress={limparCampos}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginVertical: 20,
    backgroundColor: '#ffeb3b',
    padding: 10,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
