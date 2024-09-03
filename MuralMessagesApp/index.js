// Importando os componentes necessários do React e React Native
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';

// Definindo o componente principal do aplicativo
const MuralMessagesApp = () => {
  // Usando o hook useState para gerenciar o estado das mensagens, autor e texto da mensagem
  // useState retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo
  const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens
  const [author, setAuthor] = useState(''); // Estado para armazenar o nome do autor
  const [messageText, setMessageText] = useState(''); // Estado para armazenar o texto da mensagem

  // Função para buscar mensagens da API
  const fetchMessages = () => {
    // fetch é uma função do JavaScript para fazer requisições HTTP
    fetch('http://mural.just.pro.br:xxxx/messages?n=100')
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        setMessages(data); // Atualiza o estado das mensagens com os dados recebidos
      })
      .catch((err) => {
        // Se ocorrer um erro, mostra um alerta
        Alert.alert(`Erro ao buscar mensagens: ${err}`);
      });
  };

  // Função para postar uma nova mensagem
  const postMessage = () => {
    // Verifica se o autor e a mensagem não estão vazios
    if (!author.trim() || !messageText.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o nome e a mensagem.');
      return; // Se estiverem vazios, exibe um alerta e interrompe a execução da função
    }

    // Faz uma requisição POST para a API
    fetch('http://mural.just.pro.br:8001/messages', {
      method: 'POST', // Especifica o método HTTP
      headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
      },
      // JSON.stringify converte o objeto JavaScript em uma string JSON
      body: JSON.stringify({ message: { author, message: messageText } })
    })
    .then((response) => {
      if (response.ok) { // Se a resposta for bem-sucedida
        Alert.alert('Sucesso', 'Mensagem postada com sucesso.');
        setAuthor(''); // Limpa o campo do autor
        setMessageText(''); // Limpa o campo da mensagem
        fetchMessages(); // Atualiza a lista de mensagens
      } else {
        throw new Error('Falha ao postar mensagem'); // Lança um erro se a resposta não for bem-sucedida
      }
    })
    .catch((err) => {
      Alert.alert(`Erro ao postar mensagem: ${err}`); // Mostra um alerta em caso de erro
    });
  };

  // useEffect é um hook que executa efeitos colaterais em componentes funcionais
  // Neste caso, ele chama fetchMessages quando o componente é montado
  useEffect(() => {
    fetchMessages(); // Chama a função para buscar mensagens ao montar o componente
  }, []); // O array vazio [] significa que este efeito só será executado uma vez, na montagem do componente

  // Função para renderizar cada item da lista de mensagens
  const renderMessage = ({ item }) => (
    <View style={styles.messageItem}>
      <Text style={styles.messageAuthor}>{item.author}:</Text>
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
  );

  // Retorna a estrutura JSX do componente
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <Text style={styles.inputTitle}>Aqui você pode fazer suas postagens:</Text>
        
        {/* Campo para o nome do autor */}
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do autor"
          value={author}
          onChangeText={setAuthor} // Atualiza o estado do autor quando o texto muda
        />
        
        {/* Campo para o texto da mensagem */}
        <Text style={styles.label}>Texto:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem"
          value={messageText}
          onChangeText={setMessageText} // Atualiza o estado da mensagem quando o texto muda
          multiline
        />

        {/* Botão para postar a mensagem */}
        <TouchableOpacity style={styles.button} onPress={postMessage}>
          <Text style={styles.buttonText}>Postar mensagem</Text>
        </TouchableOpacity>

        {/* Botão para buscar novas mensagens */}
        <TouchableOpacity style={styles.button} onPress={fetchMessages} >
          <Text style={styles.buttonText}>Buscar novas mensagens</Text>
        </TouchableOpacity>
        
        {/* Seção para exibir as mensagens */}
        <Text style={styles.sectionTitle}>Mensagens:</Text>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id.toString()}
            style={styles.messageList}
          />
        </ScrollView>
      </View>
    </View>
  );
};

// Definindo os estilos dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f8fc',
    marginTop: 20,
  },
  inputSection: {
    marginTop: 20,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2a86ff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  scrollView: {
    maxHeight: '47%',
  },
  messageList: {
    marginTop: 10,
  },
  messageItem: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  messageAuthor: {
    fontWeight: 'bold',
    color: '#444',
  },
  messageText: {
    marginTop: 5,
    color: '#555',
  },
});

// Exporta o componente para ser usado em outros arquivos
export default MuralMessagesApp;
