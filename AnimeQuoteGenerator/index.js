import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const AnimeQuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    fetch('https://animechan.xyz/api/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
      })
      .catch((err) => {
        Alert.alert(`Erro: ${err}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Pressione o botão para gerar uma frase</Text>
      <Button title="Gerar Frase" onPress={fetchQuote} />
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instruction: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  quoteText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default AnimeQuoteGenerator;