import React, { useState } from 'react';
import { StatusBar, ImageBackground, StyleSheet, Text, SafeAreaView, Button, Modal, TextInput, View } from 'react-native';

export default function App() {
  const [promptVisible, setPromptVisible] = useState(false);
  const [promptValue, setPromptValue] = useState('');

  const handleButtonPress = () => {
    setPromptVisible(true);
  };

  const handlePromptSubmit = () => {
    console.log(`You entered: ${promptValue}`);
    setPromptVisible(false);
    setPromptValue('');
  };

  const handlePromptCancel = () => {
    setPromptVisible(false);
    setPromptValue('');
  };

  return (
    <ImageBackground source={require('./assets/img.jpg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Button title='Click me' color="red" onPress={handleButtonPress} />
        <StatusBar style="auto" />

        <Modal
          transparent={true}
          animationType="slide"
          visible={promptVisible}
          onRequestClose={handlePromptCancel}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Enter a value:</Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(text) => setPromptValue(text)}
              value={promptValue}
            />
            <Button title='OK' onPress={handlePromptSubmit} />
            <Button title='Cancel' color='red' onPress={handlePromptCancel} />
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // ... existing styles

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: 200,
    backgroundColor: 'white',
  },
});
