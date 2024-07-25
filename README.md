<p align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></img>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"></img>
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js"></img>
    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"></img>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="HTML5"></img>
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"></img>
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="Sequelize"></img>
</p>

# Projeto Full Stack de Interface de Login

Este é um projeto Full Stack que consiste em uma interface de login integrada com uma API desenvolvida em Node.js e Express. O projeto inclui validação de informações de usuários utilizando um banco de dados MySQL e um cliente desenvolvido em React.js com estilização feita através do pré-processador SASS.


[https://github.com/Fcsscoder/login_mysql/assets/147114358/5e12e70f-fc9c-418d-8bbe-f0908acb2dfc](https://github.com/user-attachments/assets/865c3ffe-eb48-4d3d-b93e-f4afc2e2b855)

## Funcionalidades

### API
- Acessar informações de contas de usuários
- Remover contas de usuários
- Criar novas contas com email e senha
- Editar dados de contas de usuários no banco de dados

### Client
- Interface de Login
- Registro de novos usuários
- Edição/Remoção de informações dos usuários

## Tecnologias Utilizadas

### Back-end
- **Node.js**: Plataforma de desenvolvimento para o servidor.
- **Express**: Framework para construção de rotas e gerenciamento de requisições.
- **MySQL**: Banco de dados utilizado para armazenar informações dos usuários.
- **Sequelize**: ORM utilizado para interagir com o banco de dados MySQL.

### Front-end
- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **SASS**: Pré-processador CSS utilizado para estilização da aplicação.

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- MySQL instalado e configurado

### Configuração do Back-end
1. Navegue até o diretório `api`.
```bash
cd api
```
3. Instale as dependências com o comando:
   
```bash
npm install
```
   
4. Configure o banco de dados em `conn.js`.
5. Inicie o servidor com o comando:
   
```bash
npm start
```

### Configuração do Front-end

1. Navegue até o diretório client:
   
```bash
cd client
```

2. Instale as dependências com o comando:
   
```bash
npm install
```

3. Inicie a aplicação React com o comando:
   
```bash
npm run dev
```
