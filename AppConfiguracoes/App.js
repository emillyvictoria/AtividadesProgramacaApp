import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker' 
import { useState } from 'react' 
import { View, Text,  Switch, StyleSheet, Button } from 'react-native'

const Preferencias = () => {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16); 
  const [nightMode, setNightMode] = useState(false); 

  
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de Preferências</Text>

      <Text style={styles.label}>Tema do aplicativo:</Text>
      <Picker
        selectedValue={theme}
        style={styles.picker}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

   
      <Text style={styles.label}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        step={2}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
      />

      <Text style={styles.label}>
        Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch
        value={nightMode}
        onValueChange={(value) => setNightMode(value)}
      />

      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 40,
  },
  picker: {
    height: 70,
    width: '100%',
    marginBottom: 120,
    marginTop: -100,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
});
export default Preferencias;