# To Do List (Backend)

Backend do projeto [To Do List (React)](https://github.com/alanlucascruz/react-to-do-list).

Projeto para o curso Fullstack Class (Avance Dev).

## Iniciar o Projeto

### `npm init`

Cria o arquivo package.json.

## Scripts para Instalação de Pacotes

### `npm install express`

Instala o Express, que serve para gerenciar rotas.

### `npm install -D nodemon`

Instala o Nodemon.
Serve para reiniciar o servidor automativamente após uma alteração.

### `npm install --save mongoose`

Instala o Mongoose, que traduz os dados do banco para objetos Javascript.

### `npm install dotenv --save`

Instala o Dotenv, que permite criar um arquivo com variáveis secretas.

Para funcionar, é preciso criar estes scripts em package.json:

#### `"dev": "nodemon -r dotenv/config server.js dotenv_config_path=.env"`

#### `"start": "node -r dotenv/config server.js dotenv_config_path=.env"`

### `npm install bcryptjs`

Instala o Bcryptjs, que criptografa senhas do banco de dados.

### `npm install jsonwebtoken`

Instala o JSONWebToken, que cria Tokens criptografados

### `npm i`

Instala todas as dependências do projeto.

As dependências do projeto estão no arquivo package.json.

Esse comando é útil quando o projeto não tem a pasta node_modules.

## Scripts para Executar o Projeto

### `npm run dev`

Executa o script `dev` do arquivo package.json.

Com esse script o servidor irá reiniciar após cada alteração.

### `npm start`

Executa o script `start` do arquivo package.json.
