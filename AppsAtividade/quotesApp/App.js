import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Importar o conteúdo  do arquivo quotes.JSON
const quotes = require('./quotes.json');

export default function QuotesApp() {
  // Estados para armazenar a citação atual, autor e imagem
  const [citaçãoAtual, setCitaçãoAtual] = useState('');
  const [autorAtual, setAutorAtual] = useState('');
  const [imagemAtual, setImagemAtual] = useState('');

  // Função para carregar uma citação aleatória do JSON
  const carregarNovaCitação = () => {
    //math.floor arredonda para baixo
    //math.random * quotes.length gera um número aleatório entre 0 e o tamanho do array
    const citaçãoAleatória = quotes[Math.floor(Math.random() * quotes.length)];// Seleciona uma citação aleatória
    setCitaçãoAtual(citaçãoAleatória.citação); // Atualiza a citação
    setAutorAtual(citaçãoAleatória.autor);     // Atualiza o nome do autor
    setImagemAtual(citaçãoAleatória.imagem);   // Atualiza a imagem do autor
  };

  // useEffect para carregar uma citação ao iniciar o app
  useEffect(() => {
    carregarNovaCitação(); // Carrega uma citação aleatória ao iniciar
  }, []);

  return (
    <View style={styles.container}>
      {/* Título do app */}
      <Text style={styles.titulo}>
        Quotes App
      </Text>

      {/* Exibir a imagem do autor */}
      <Image
        source={{ uri: imagemAtual }}
        style={styles.imagemAutor}
      />
      
      {/* Exibir a citação */}
      <Text style={styles.citaçãoTexto}>
        "{citaçãoAtual}"
      </Text>
      
      {/* Exibir o nome do autor */}
      <Text style={styles.autorTexto}>
        - {autorAtual}
      </Text>

      {/* Botão para gerar uma nova citação */}
      <TouchableOpacity style={styles.botão} onPress={carregarNovaCitação}>
        <Text style={styles.textoBotão}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos do app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   // Centralizar o conteúdo verticalmente
    alignItems: 'center',       // Centralizar o conteúdo horizontalmente
    backgroundColor: '#fff'    // Cor de fundo branco
  },
  titulo: {
    fontSize: 32,               // Tamanho da fonte do título
    fontWeight: 'bold',         
    color: '#fff',           
    marginBottom: 160,
    backgroundColor: '#1E90FF', 
    padding: 10,
    width: '100%',              // Ocupar 100% da largura da tela
    alignItems: 'center'                          
  },
  imagemAutor: {
    width: 220,                 // Largura da imagem do autor
    height: 220,                // Altura da imagem do autor
    borderRadius: 110,          // Tornar a imagem circular
    marginBottom: 20           
  },
  citaçãoTexto: {
    fontSize: 19,               
    color: '#333',              
    textAlign: 'center',        
    marginHorizontal: 20,       
    marginBottom: 10          
  },
  autorTexto: {
    fontSize: 16,               
    color: '#666',              
    marginBottom: 20           
  },
  botão: {
    backgroundColor: '#1E90FF', 
    padding: 10,                
    borderRadius: 5            
  },
  textoBotão: {
    color: '#fff',             
    fontSize: 16               
  },
});
