# API MongoDB com Node.js

Este projeto é uma API desenvolvida em Node.js que utiliza o MongoDB como banco de dados. A API permite a criação, leitura, atualização e exclusão (CRUD) de dados armazenados no MongoDB.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

Além disto, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/API_MongoDB.git
   ```

2. Acesse a pasta do projeto no terminal:

   ```bash
   cd API_MongoDB
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   MONGO_URI=sua_string_de_conexão_com_mongodb
   PORT=3000
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando:
`bash
    npm start
    `

A API estará disponível em `http://localhost:3000`.

## Rotas

A seguir estão as rotas disponíveis na API:

- `GET /items`: Retorna todos os itens.
- `GET /items/:id`: Retorna um item específico pelo ID.
- `POST /items`: Cria um novo item.
- `PUT /items/:id`: Atualiza um item pelo ID.
- `DELETE /items/:id`: Exclui um item pelo ID.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
