import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Array de frases de sorte
const frases = [
  'A vida é uma aventura, viva-a!',  // Cada item desse array representa uma frase que será exibida ao "quebrar" o biscoito.
  'Boas notícias estão a caminho.',
  'Você está prestes a fazer uma descoberta importante.',
  'Algo maravilhoso vai acontecer com você hoje.',
  'A sorte favorece os corajosos.',
];

// URLs das imagens do biscoito fechado e quebrado
const biscoitoFechado = 'https://app-biscoito-da-sorte.vercel.app/src/biscoito.png'; 
const biscoitoQuebrado = 'https://media.istockphoto.com/id/182188852/pt/foto/bolinho-da-sorte-partida-aberta-reveladora-branco-sorte.jpg?s=612x612&w=0&k=20&c=8BbWulAw1qOgQzPy0CweWkGSO9ZxNahNIiaSxk19aSM='; 

export default function App() {
  // Declaração de estados usando o hook useState
  const [broken, setBroken] = useState(false); // Estado 'broken' indica se o biscoito foi quebrado ou não (false = não, true = sim)
  const [fortune, setFortune] = useState('');  // Estado 'fortune' armazena a frase que será exibida quando o biscoito for quebrado

  // Função chamada ao clicar para "quebrar" o biscoito
  const breakCookie = () => {
    setBroken(true);  // Muda o estado para indicar que o biscoito está quebrado
    // Seleciona uma frase aleatória do array 'frases'
    const randomFortune = frases[Math.floor(Math.random() * frases.length)];
    setFortune(randomFortune);  // Atualiza o estado com a frase selecionada
  };

  // Função chamada para resetar o biscoito
  const resetCookie = () => {
    setBroken(false);  // Volta o estado para "não quebrado"
    setFortune('');    // Remove a frase de sorte (estado vazio)
  };

  // O componente retorna a interface do usuário
  return (
    <View style={styles.container}>
      {/* TouchableOpacity permite detectar cliques no biscoito */}
      <TouchableOpacity onPress={broken ? resetCookie : breakCookie}>
        {/* Image exibe a imagem do biscoito, que muda conforme o estado 'broken' */}
        <Image
          source={{
            uri: broken ? biscoitoQuebrado : biscoitoFechado,  // Escolhe a imagem com base no estado do biscoito (fechado ou quebrado)
          }}
          style={styles.imagemBiscoito}  // Aplica o estilo definido no 'imagemBiscoito'
        />
      </TouchableOpacity>
      {/* Se o biscoito estiver quebrado, exibe a frase de sorte */}
      {broken && <Text style={styles.textoFrase}>{fortune}</Text>}
      
      {/* Botão que muda seu texto e funcionalidade conforme o estado do biscoito */}
      <TouchableOpacity style={styles.botao} onPress={broken ? resetCookie : breakCookie}>
        {/* O texto do botão muda conforme o estado do biscoito */}
        <Text style={styles.textoBotao}>
          {broken ? 'Quebrar outro biscoito' : 'Quebrar o Biscoito'}  {/* Muda o texto do botão dependendo do estado */}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#fff', 
  },
  imagemBiscoito: {
    width: 300,  
    height: 258, 
    marginBottom: 20,  
  },
  textoFrase: {
    fontSize: 18,  
    color: '#333',  
    marginVertical: 20,  
    textAlign: 'center',  
  },
  botao: {
    backgroundColor: '#ffa500', 
    padding: 10,  
    borderRadius: 5, 
  },
  textoBotao: {
    color: '#fff',  
    fontSize: 16, 
  },
});
