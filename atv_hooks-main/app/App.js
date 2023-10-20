import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [genero, setGenero] = useState('');

  const handleGeneroPress = (generoSelecionado) => {
    setGenero(generoSelecionado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça seu Cadastro</Text>
      <View style={styles.firstDiv}>
        <TextInput
          style={styles.firstInput}
          placeholder='Nome'
        />
        <Text style={styles.generoText}>Gênero</Text>
        <View style={styles.generoContainer}>
          <TouchableOpacity
            onPress={() => handleGeneroPress('Masculino')}
            style={[
              styles.bolaButton,
              genero === 'Masculino' && styles.selectedBolaButton,
            ]}
          >
            <View
              style={[
                styles.innerBolaButton,
                genero === 'Masculino' && styles.selectedInnerBolaButton,
              ]}
            />
            <Text>Masculino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleGeneroPress('Feminino')}
            style={[
              styles.bolaButton,
              genero === 'Feminino' && styles.selectedBolaButton,
            ]}
          >
            <View
              style={[
                styles.innerBolaButton,
                genero === 'Feminino' && styles.selectedInnerBolaButton,
              ]}
            />
            <Text>Feminino</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder='Data de Nascimento'
          style={styles.dataInput}/>
        <TextInput
        placeholder='Usuário'
        style={styles.usuarioInput}
        />
        <TextInput
        placeholder='Senha'
        style={styles.senhaInput}
        />
        <TextInput
        placeholder='E-mail'
        style={styles.emailInput}
        />
        <TextInput
        placeholder='Confirme seu email'
        style={styles.confEmailInput}
        />
        <TextInput
        placeholder='CPF'
        style={styles.cpfInput}
        />
        <TextInput
        placeholder='Idioma do currículo'
        style={styles.idiomaInput}
        />
        <Button title='Cadastrar'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    top: -220,
    fontSize: 33,
  },
  firstDiv: {
    backgroundColor: '#fff',
  },
  generoText: {
    fontSize: 11,
  },
  firstInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  generoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bolaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  innerBolaButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e3e3e3',
    marginRight: 10,
  },
  selectedInnerBolaButton: {
    backgroundColor: 'green',
  },
  usuarioInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  dataInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  senhaInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  emailInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  confEmailInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  cpfInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  idiomaInput: {
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  }
});
