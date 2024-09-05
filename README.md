# Aplicativo Mural de Mensagens

Este projeto, desenvolvido em React Native, é uma aplicação de Mural de Mensagens criada como parte da aula sobre Fetch API no IFBA. A aplicação permite que os usuários publiquem novas mensagens e visualizem as mensagens mais recentes de outros usuários em um mural. O app faz uso da Fetch API para se comunicar com um servidor remoto, realizando requisições HTTP para obter e enviar dados em formato JSON. A interface é construída com componentes do React Native, como `FlatList`, `TextInput`, `TouchableOpacity`, e `ScrollView`, proporcionando uma experiência de usuário simples e intuitiva.

<p align="center">
  <img src="https://github.com/user-attachments/assets/07b81f29-2aeb-4b5f-8591-ddc5efa4bc9c" width="200" alt="Screenshot do Aplicativo">
</p>

### Funcionalidades Principais:
- **Visualizar Mensagens**: Recupera as mensagens mais recentes do mural e as exibe em uma lista.
- **Postar Mensagens**: Permite ao usuário postar uma nova mensagem, que é enviada para a API.
- **Feedback do Usuário**: Utiliza `Alert` para notificar o usuário sobre o sucesso ou falha nas operações de postagem e recuperação de mensagens.
  
### Tecnologias Utilizadas:
- **React Native**: Para a construção da interface do usuário.
- **Fetch API**: Para realizar requisições HTTP e interagir com a API remota.
- **Hooks do React (`useState`, `useEffect`)**: Para gerenciar o estado e os efeitos colaterais no componente.

### Instruções para Execução

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/diogomasc/MuralMessagesApp.git
   ```

2. **Navegue para o Diretório do Projeto**:
   ```bash
   cd MuralMessagesApp
   ```

3. **Instale as Dependências**:
   ```bash
   npm install
   ```

4. **Inicie e Execute o Servidor de Desenvolvimento**:
   ```bash
   npm start
   ```

## Observações

- O aplicativo utiliza uma API externa para gerenciar as mensagens desenvolvido por um docente do campus Feira de Sa. Para garantir a segurança e integridade dos dados, o endereço da API é mantido em sigilo. Caso você queira testar o aplicativo com a API ativa, entre em contato para obter acesso.
- Este projeto foi desenvolvido para fins educacionais e pode ser utilizado como base para futuros desenvolvimentos e melhorias.
