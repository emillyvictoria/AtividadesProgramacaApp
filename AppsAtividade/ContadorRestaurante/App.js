import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ContadorRestaurante() {
  const [contador, setContador] = useState(0); // Estado para armazenar o número de pessoas

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1); // Incrementa o número de pessoas
  };

  // Função para decrementar o contador
  const decrementar = () => {
    if (contador > 0) {       // Apenas decrementa se houver pessoas no restaurante
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Título do app */}
      <View style={styles.tituloContainer}>
        <Text style={styles.tituloTexto}>Contador de Pessoas</Text>
      </View>

      {/* Exibição do número de pessoas */}
      <Text style={styles.contadorTexto}>Pessoas no Restaurante:
       {contador}</Text>

      {/* Botões de incrementar e decrementar */}
      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.botao} onPress={incrementar}>
          <Text style={styles.textoBotao}>Entrou</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={decrementar}>
          <Text style={styles.textoBotao}>Saiu</Text>
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
  // Estilo do título
  tituloContainer: {
    width: '100%',              
    backgroundColor: '#1E90FF', 
    paddingVertical: 15,        
    alignItems: 'center',       
    position: 'absolute',       
    top: 100,                     
  },
  tituloTexto: {
    fontSize: 28,               
    fontWeight: 'bold',         
    color: '#fff',              
  },
  // Estilo do contador
  contadorTexto: {
    fontSize: 32,               
    marginBottom: 20,           
    marginTop: 120,             
    fontWeight: 'bold',         
  },
  botoesContainer: {
    flexDirection: 'row',       
    justifyContent: 'space-around',
    width: '100%',              
    paddingHorizontal: 20,      
  },
  botao: {
    backgroundColor: '#1E90FF', 
    padding: 15,                
    borderRadius: 5,            
    flex: 1,                    
    marginHorizontal: 10,       
  },
  textoBotao: {
    color: '#fff',              
    fontSize: 18,               
    textAlign: 'center',        
  },
});
