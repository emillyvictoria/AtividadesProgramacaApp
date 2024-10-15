import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function App() {
  const [movimentoUsuario, setMovimentoUsuario] = useState('');
  const [movimentoComputador, setMovimentoComputador] = useState('');
  const [resultado, setResultado] = useState('');

  const movimentosAleatorios = () => {
    const movimentos = ['Pedra', 'Papel', 'Tesoura?'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return movimentos[numeroAleatorio];
  };

  const verificarVencedor = (movimentoUsuario, movimentoComputador) => {
    if (movimentoUsuario === movimentoComputador) {
      return 'Empate';
    } else if (
      (movimentoUsuario === 'Pedra' && movimentoComputador === 'Tesoura') ||
      (movimentoUsuario === 'Papel' && movimentoComputador === 'Pedra') ||
      (movimentoUsuario === 'Tesoura' && movimentoComputador === 'Papel')
    ) {
      return 'Você venceu!';
    } else {
      return 'Você perdeu :(';
    }
  };

  const jogar = (movimentoUsuario) => {
    const movimentoComputador = movimentosAleatorios();
    setMovimentoUsuario(movimentoUsuario);
    setMovimentoComputador(movimentoComputador);
    const resultado = verificarVencedor(movimentoUsuario, movimentoComputador);
    setResultado(resultado);
  };

  const resetarJogo = () => {
    setMovimentoUsuario('');
    setMovimentoComputador('');
    setResultado('');
  };

  let pedra = 'https://images.tcdn.com.br/img/img_prod/1210381/pedra_vulcanica_vermelha_red_kg_889_2_3318712164f76df19e3212089612ac47.jpg';
  let papel = 'https://images.tcdn.com.br/img/img_prod/1041864/papel_fotografico_a4_115g_50_folhas_356703_1_ba0d4f88ef1f2c044fe682b50b001c94.jpg';
  let tesoura = 'https://www.avimortecidos.com.br/static/6370/sku/164787542987626.png';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel ou Tesoura</Text>

      <View style={styles.choicesContainer}>
        <TouchableOpacity onPress={() => jogar('Pedra')}>
          <Image source={{ uri: pedra }} style={styles.choiceImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogar('Papel')}>
          <Image source={{ uri: papel }} style={styles.choiceImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => jogar('Tesoura')}>
          <Image source={{ uri: tesoura }} style={styles.choiceImage} />
        </TouchableOpacity>
      </View>

      {resultado !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você escolheu: {movimentoUsuario}</Text>
          <Text style={styles.resultText}>O aplicativo escolheu: {movimentoComputador}</Text>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.botao} onPress={resetarJogo}>
        <Text style={styles.textoBotao}>Jogar Novamente</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  choiceImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  botao: {
    backgroundColor: '#C34A36',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 90,
    marginRight: 90,
  },
  textoBotao: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  resultContainer: {
    marginVertical: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
