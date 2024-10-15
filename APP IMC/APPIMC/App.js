import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Image, Button, View, TouchableOpacity } from 'react-native';

const AppIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [imcResultado, setImcResultado] = useState('');
  let imagemFita = 'https://img.freepik.com/fotos-premium/balanca-de-banheiro-com-fita-metrica-isolada-no-fundo_488220-22337.jpg'
  let fita = 'https://acdn.mitiendanube.com/stores/003/346/164/products/16905536488581-ae0ae647655240d2f316905537225635-1024-1024.png'
  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    setImc(imc.toFixed(2));

    if (imc < 18.5) {
      setImcResultado('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setImcResultado('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setImcResultado('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setImcResultado('Obesidade grau 1');
    } else if (imc >= 35 && imc < 39.9) {
      setImcResultado('Obesidade grau 2');
    } else {
      setImcResultado('Obesidade grau 3');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Calculadora de IMC</Text>
      <View style={styles.ContainerTextoimagem}>
        <Image source={{ uri: imagemFita }} style={styles.imagemFita} />
        <Text style={styles.textoIMC}>
          O Índice de Massa Corporal (IMC) é uma medida usada para avaliar se uma pessoa está dentro do peso ideal em relação à altura. Ele é calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
        </Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        placeholder="Peso"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAltura}
        value={altura}
        placeholder="Altura"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular IMC</Text>
      </TouchableOpacity>

      <Text style={styles.IMC}>Seu IMC é: {imc}</Text>
      <Text style={styles.Resultado}> O seu resultado é: {imcResultado}</Text>
      <Image source={{ uri: fita }} style={styles.imagemFita2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  texto: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  IMC: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFDE4D',
    borderRadius: 10,
    padding: 5,

  },
  Resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFDE4D',
    borderRadius: 10,
    padding: 5,
  },
  imagemFita: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginLeft: 20,

  },
  imagemFita2: {
    width: 300,
    height: 300,
    marginRight: 30,
    marginLeft: 50,

  },
  ContainerTextoimagem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  textoIMC: {
    flex: 1,
    fontSize: 14,
    marginLeft: 16,
    marginRight: 15,
  },
  botao: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 90,
    marginRight: 90,
  },
  textoBotao: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },

})

export default AppIMC;