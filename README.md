# Gerenciamento de Clientes - CLIENTFORM

Este é um projeto de gerenciamento de clientes que consiste em uma aplicação frontend React e um servidor backend JSON Server.

## Instruções de Execução

### Frontend

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Navegue até a pasta do projeto

3. Instale as dependências do frontend: npm install
 
4. Inicie a aplicação frontend: npm start

A aplicação frontend será executada no endereço [http://localhost:3000](http://localhost:3000).

### Backend

1. Inicie o servidor JSON Server: npm run dev

O servidor backend estará em execução no endereço [http://localhost:5000](http://localhost:5000). 
Os dados serão armazenados em um arquivo `db.json`.

## Funcionalidades

- **Cadastro de Clientes**: Acesse a rota `/cadastrar` para cadastrar novos clientes. Preencha os campos necessários e clique em "Criar" para adicionar um novo cliente.

- **Listagem de Clientes**: Acesse a rota `/clientes` para ver a lista de clientes cadastrados. Os clientes serão exibidos em formato de lista, com detalhes como nome, e-mail, CPF, telefone e status.

- **Remoção de Clientes**: Na lista de clientes, cada cliente terá um botão "Remover". Clique nele para remover o cliente da lista.

## Tecnologias Utilizadas

- React
- React Router Dom
- JSON Server
- Styled Components
- JavaScript


