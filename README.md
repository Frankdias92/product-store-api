

SERVIDOR-STORE
├── src
│  ├── configs
│  │  ├── utils
│  │  └── server.js 
│  ├── controllers
│  │  ├── AllProductsController.js
│  │  ├── ProductController.js
│  │  ├── SessionsController.js
│  │  ├── TagsController.js
│  │  ├── UserAvatarController.js
│  │  └── UserController.js
│  ├── database
│  │  ├── knex
│  │  │  ├── migrations
│  │  │  │  ├── 20240320202727_createProducts.js
│  │  │  │  ├── 20240321003608_createTags.js
│  │  │  │  └── 20240321004040_createLinks.js
│  │  │  └── index.js
│  │  ├── sqlite
│  │  │  ├── migrations
│  │  │  │  ├── createUsers.js
│  │  │  │  └── index.js
│  │  │  └── index.js
│  │  └── database.db
│  ├── middlewares
│  │  └── ensureAuthenticated.js
│  ├── providers
│  │  └── DiskStorage.js
│  ├── routes
│  │  ├── allProducts.routes.js
│  │  ├── index.js
│  │  ├── products.routes.js
│  │  ├── sessions.routes.js
│  │  ├── tags.routes.js
│  │  └── users.routes.js
│  ├── utils
│  │  └── AppError.js
│  └── server.js
├── tmp
│  ├── uploads
│  │  └── ...
│  └── uploads
├── knexfile.js
├── package-lock.json
├── package.json
└── README.md




Claro! Vamos montar a documentação completa da API Server-Store. Vou estruturar a documentação em seções para abranger todos os aspectos importantes da API, incluindo endpoints, métodos, parâmetros, autenticação e muito mais. Vamos começar:

---

# Documentação da API Server-Store

## Introdução

Bem-vindo à documentação da API Server-Store. Esta API permite o gerenciamento de produtos, usuários e autenticação para uma loja virtual.

## Base URL

A URL base para todos os endpoints da API é:

```
https://api.server-store.com
```

## Autenticação

A API utiliza autenticação baseada em tokens JWT (JSON Web Tokens) para garantir a segurança das operações. Para acessar endpoints protegidos, é necessário incluir o token JWT no cabeçalho de autorização da requisição.

### Registro de Usuário

#### Endpoint

```
POST /register
```

#### Descrição

Registra um novo usuário na API.

#### Parâmetros da Requisição

- `name`: Nome do usuário (string)
- `email`: Endereço de e-mail do usuário (string)
- `password`: Senha do usuário (string)

#### Exemplo de Requisição

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Resposta de Sucesso

Status: 201 Created

```json
{
  "message": "User created successfully"
}
```

#### Resposta de Erro

Status: 400 Bad Request

```json
{
  "error": "Email already in use"
}
```

### Autenticação de Usuário

#### Endpoint

```
POST /login
```

#### Descrição

Autentica um usuário na API e retorna um token JWT para acesso aos endpoints protegidos.

#### Parâmetros da Requisição

- `email`: Endereço de e-mail do usuário (string)
- `password`: Senha do usuário (string)

#### Exemplo de Requisição

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Resposta de Sucesso

Status: 200 OK

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Resposta de Erro

Status: 401 Unauthorized

```json
{
  "error": "Email or password invalid"
}
```

## Recursos Disponíveis

A API Server-Store oferece os seguintes recursos:

### Usuários

#### Endpoints

- **Registro de Usuário:** `POST /register`
- **Autenticação de Usuário:** `POST /login`

### Produtos

#### Endpoints

- **Listar Produtos:** `GET /products`
- **Detalhes do Produto:** `GET /products/:id`
- **Criar Produto:** `POST /products`
- **Atualizar Produto:** `PUT /products/:id`
- **Excluir Produto:** `DELETE /products/:id`


## Recursos Disponíveis (Continuação)

### Usuários

#### Endpoints

- **Registro de Usuário:** `POST /register`
  - Registra um novo usuário na API.

  ##### Parâmetros da Requisição

  - `name`: Nome do usuário (string)
  - `email`: Endereço de e-mail do usuário (string)
  - `password`: Senha do usuário (string)

  ##### Exemplo de Requisição

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

  ##### Resposta de Sucesso

  Status: 201 Created

  ```json
  {
    "message": "User created successfully"
  }
  ```

  ##### Resposta de Erro

  Status: 400 Bad Request

  ```json
  {
    "error": "Email already in use"
  }
  ```

- **Autenticação de Usuário:** `POST /login`
  - Autentica um usuário na API e retorna um token JWT para acesso aos endpoints protegidos.

  ##### Parâmetros da Requisição

  - `email`: Endereço de e-mail do usuário (string)
  - `password`: Senha do usuário (string)

  ##### Exemplo de Requisição

  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

  ##### Resposta de Sucesso

  Status: 200 OK

  ```json
  {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

  ##### Resposta de Erro

  Status: 401 Unauthorized

  ```json
  {
    "error": "Email or password invalid"
  }
  ```


Obrigado por fornecer os detalhes adicionais. Agora, com base nas informações fornecidas, podemos atualizar a documentação da API para incluir os detalhes sobre os produtos, incluindo as imagens dos produtos, as tags associadas a eles e os links relacionados. Vou incorporar essas informações na documentação. Aqui está o arquivo atualizado:

### Produtos

#### Endpoints

- **Listar Todos os Produtos:** `GET /products`
  - Retorna uma lista de todos os produtos disponíveis na loja, incluindo suas informações, tags e links associados.

  ##### Parâmetros da Requisição

  Nenhum.

  ##### Exemplo de Requisição

  ```
  GET /products
  ```

  ##### Resposta de Sucesso

  Status: 200 OK

  ```json
  [
    {
      "id": 1,
      "title": "Product 1",
      "description": "Description of product 1",
      "price": 99.99,
      "productIMG": "product1.jpg",
      "category": "Category 1",
      "urlProduct": "http://example.com/product1",
      "tags": [
        { "id": 1, "name": "Tag 1" },
        { "id": 2, "name": "Tag 2" }
      ]
    },
    {
      "id": 2,
      "title": "Product 2",
      "description": "Description of product 2",
      "price": 149.99,
      "productIMG": "product2.jpg",
      "category": "Category 2",
      "urlProduct": "http://example.com/product2",
      "tags": [
        { "id": 3, "name": "Tag 3" },
        { "id": 4, "name": "Tag 4" }
      ]
    }
  ]
  ```

- **Detalhes do Produto:** `GET /products/:id`
  - Retorna os detalhes de um produto específico com base no ID fornecido, incluindo suas informações, tags e links associados.

  ##### Parâmetros da Requisição

  - `id`: ID do produto (integer)

  ##### Exemplo de Requisição

  ```
  GET /products/1
  ```

  ##### Resposta de Sucesso

  Status: 200 OK

  ```json
  {
    "id": 1,
    "title": "Product 1",
    "description": "Description of product 1",
    "price": 99.99,
    "productIMG": "product1.jpg",
    "category": "Category 1",
    "urlProduct": "http://example.com/product1",
    "tags": [
      { "id": 1, "name": "Tag 1" },
      { "id": 2, "name": "Tag 2" }
    ]
  }
  ```

  ##### Resposta de Erro

  Status: 404 Not Found

  ```json
  {
    "error": "Product not found"
  }
  ```

- **Criar Produto:** `POST /products`
  - Cria um novo produto na loja.

  ##### Parâmetros da Requisição

  - `title`: Título do produto (string)
  - `description`: Descrição do produto (string)
  - `price`: Preço do produto (number)
  - `urlProduct`: URL do produto (string)
  - `productIMG`: Imagem do produto (file)
  - `category`: Categoria do produto (string)
  - `tags`: Array de tags associadas ao produto (array de strings)

  ##### Exemplo de Requisição

  ```json
  {
    "title": "New Product",
    "description": "Description of the new product",
    "price": 199.99,
    "urlProduct": "http://example.com/new-product",
    "productIMG": (imagem do produto),
    "category": "Category",
    "tags": ["Tag 1", "Tag 2"]
  }
  ```

  ##### Resposta de Sucesso

  Status: 201 Created

  ```json
  {
    "message": "Product created successfully"
  }
  ```

- **Atualizar Produto:** `PUT /products/:id`
  - Atualiza as informações de um produto existente na loja com base no ID fornecido.

  ##### Parâmetros da Requisição

  - `id`: ID do produto (integer)
  - `title`: Título do produto (string, opcional)
  - `description`: Descrição do produto (string, opcional)
  - `price`: Preço do produto (number, opcional)
  - `urlProduct`: URL do produto (string, opcional)
  - `productIMG`: Imagem do produto (file, opcional)
  - `category`: Categoria do produto (string, opcional)
  - `tags`: Array de tags associadas ao produto (array de strings, opcional)

  ##### Exemplo de Requisição

  ```json
  {
    "title": "New product",
    "description": "New description of the product",
    "price": 249.99,
    "urlProduct": "https://www.exemple.com",
    "tags": ["Tag 1", "Tag 2", "Tag 3"]
  }
  ```

  ##### Resposta de Sucesso

  Status: 200 OK

  ```json
  {
    "message": "Product updated successfully"
  }
  ```

  ##### Resposta de Erro

  Status: 404 Not Found

  ```json
  {
    "error": "Product not found"
  }
  ```

- **Excluir Produto:** `DELETE /products/:id`
  - Exclui um produto da loja com base no ID fornecido.

  ##### Parâmetros da Requisição

  - `id`: ID do produto (integer)

  ##### Exemplo de Requisição

  ```
  DELETE /products/1
  ```

  ##### Resposta de Sucesso

  Status: 200 OK

  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

  ##### Resposta de Erro

  Status: 404 Not Found

  ```json
  {
    "error": "Product not found"
  }
  ```

Com essas atualizações, a documentação agora reflete com precisão os detalhes dos produtos, incluindo as imagens, tags e links associados.