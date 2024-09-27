import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Cronometro() {
  const [tempo, setTempo] = useState(0); // Tempo em milissegundos
  const [isRodando, setIsRodando] = useState(false); // Estado para controle do cronômetro
  const [intervalo, setIntervalo] = useState(null); // Armazena o intervalo

  // Função para formatar o tempo em mm:ss:ss
  const formatarTempo = (milissegundos) => {
    const totalSegundos = Math.floor(milissegundos / 1000); // Converte milissegundos para segundos
    const minutos = Math.floor(totalSegundos / 60); // Calcula os minutos
    const segundos = totalSegundos % 60; // Calcula os segundos
    const milissegundosRestantes = Math.floor((milissegundos % 1000) / 10);
    
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}:${milissegundosRestantes < 10 ? '0' : ''}${milissegundosRestantes}`;
  };

  // Efeito para iniciar o cronômetro
  useEffect(() => {
    if (isRodando) {
      setIntervalo(setInterval(() => {
        setTempo((prevTempo) => prevTempo + 10); // Incrementa o tempo em 10ms
      }, 10));
    } else {
      clearInterval(intervalo); // Limpa o intervalo ao pausar
    }

    return () => clearInterval(intervalo); // Limpa o intervalo ao clicar em parar
  }, [isRodando]);

  // Função para iniciar o cronômetro
  const iniciar = () => {
    setIsRodando(true);
  };

  // Função para pausar o cronômetro
  const pausar = () => {
    setIsRodando(false);
  };

  // Função para reiniciar o cronômetro
  const reiniciar = () => {
    setIsRodando(false);
    setTempo(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tempo}>{formatarTempo(tempo)}</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={iniciar}>
          <Text style={styles.textoBotao}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={pausar}>
          <Text style={styles.textoBotao}>Pausar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={reiniciar}>
          <Text style={styles.textoBotao}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
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
  tempo: {
    fontSize: 48,               
    fontWeight: 'bold',         
    marginBottom: 20,          
  },
  botoesContainer: {
    flexDirection: 'row',       
    justifyContent: 'space-around', 
    width: '100%',              
    paddingHorizontal: 20,      
  },
  botao: {
    backgroundColor: '#FFB233', 
    padding: 10,                
    borderRadius: 5,            
    flex: 1,                    
    marginHorizontal: 5,        
  },
  textoBotao: {
    color: '#fff',              
    textAlign: 'center',        
  },
});
