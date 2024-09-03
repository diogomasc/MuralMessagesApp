# Aplicativo Mural de Mensagens

<p align="center">
  <img src="https://github.com/user-attachments/assets/07b81f29-2aeb-4b5f-8591-ddc5efa4bc9c" width="200" alt="Screenshot do Aplicativo">
</p>

## Sobre o Projeto

Este aplicativo foi desenvolvido durante a aula de Desenvolvimento Mobile no IFBA (Instituto Federal da Bahia). O objetivo principal é criar um mural digital onde diversas pessoas podem publicar e visualizar mensagens, utilizando conceitos de desenvolvimento mobile e integração com APIs.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **JavaScript**: Linguagem de programação principal.
- **Fetch API**: Utilizada para realizar requisições HTTP ao servidor.
- **API Externa**: Utilizada para armazenar e recuperar mensagens do mural.

## Funcionalidades

1. Visualização de mensagens recentes do mural.
2. Publicação de novas mensagens com nome do autor.
3. Atualização automática da lista de mensagens após uma nova publicação.

## Como Testar

Para testar o aplicativo em seu ambiente local, siga estas etapas:

1. **Pré-requisitos**:
   - Certifique-se de ter o Node.js instalado em seu computador.
   - Instale o Expo CLI globalmente: `npm install -g expo-cli`.

2. **Configuração do Projeto**:
   - Clone este repositório: `git clone https://github.com/diogomasc/MuralMessagesApp.git`.
   - Navegue até a pasta do projeto: `cd MuralMessagesApp`.
   - Instale as dependências: `npm install`.

3. **Executando o Aplicativo**:
   - Inicie o servidor de desenvolvimento: `npm start`.
   - Use o aplicativo Expo Go em seu dispositivo móvel para escanear o QR code exibido no terminal ou na página web que será aberta.

4. **Testando as Funcionalidades**:
   - Ao abrir o aplicativo, você verá as mensagens mais recentes do mural.
   - Para publicar uma nova mensagem, preencha os campos "Nome" e "Texto" e pressione o botão "Postar Mensagem".
   - A lista de mensagens será atualizada automaticamente após cada nova postagem.

## Observações

- O aplicativo utiliza uma API externa para gerenciar as mensagens. Para garantir a segurança e integridade dos dados, o endereço da API é mantido em sigilo. Caso você queira testar o aplicativo com a API ativa, entre em contato para obter acesso.
- Este projeto foi desenvolvido para fins educacionais e pode ser utilizado como base para futuros desenvolvimentos e melhorias.
