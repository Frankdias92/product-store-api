

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




Welcome!

This comprehensive guide serves as your one-stop resource for exploring and utilizing the Server-Store API effectively. Whether you're a seasoned developer or just getting started, this documentation equips you with the knowledge to integrate the API seamlessly into your projects.

What is Server-Store?

Server-Store is a robust API designed to simplify the management of products, users, and authentication functionalities within an e-commerce application.

---

# Server-Store API Documentation

## Introduction

Welcome to the Server-Store API documentation. This API allows for the management of products, users, and authentication for an online store.

## Base URL

The base URL for all API endpoints is:

```
https://localhost:3333
```

## Authentication

The API utilizes JWT (JSON Web Tokens) based authentication to ensure the security of operations. To access protected endpoints, it is necessary to include the JWT token in the request authorization header.

### User Registration

#### Endpoint

```
POST /register
```

#### Description

Registers a new user in the API.

#### Request Parameters

- `name`: User's name (string)
- `email`: User's email address (string)
- `password`: User's password (string)

#### Request Example

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Success Response

Status: 201 Created

```json
{
  "message": "User created successfully"
}
```

#### Error Response

Status: 400 Bad Request

```json
{
  "error": "Email already in use"
}
```

### User Authentication

#### Endpoint

```
POST /login
```

#### Description

Authenticates a user in the API and returns a JWT token for access to protected endpoints.

#### Request Parameters

- `email`: User's email address (string)
- `password`: User's password (string)

#### Request Example

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Success Response

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

#### Error Response

Status: 401 Unauthorized

```json
{
  "error": "Email or password invalid"
}
```

## Available Resources

The Server-Store API offers the following resources:

### Users

#### Endpoints

- **User Registration:** `POST /register`
- **User Authentication:** `POST /login`

### Products

#### Endpoints

- **List Products:** `GET /products`
- **Product Details:** `GET /products/:id`
- **Create Product:** `POST /products`
- **Update Product:** `PUT /products/:id`
- **Delete Product:** `DELETE /products/:id`

## Continued Available Resources

### Users

#### Endpoints

- **User Registration:** `POST /register`
  - Registers a new user in the API.

  ##### Request Parameters

  - `name`: User's name (string)
  - `email`: User's email address (string)
  - `password`: User's password (string)

  ##### Request Example

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

  ##### Success Response

  Status: 201 Created

  ```json
  {
    "message": "User created successfully"
  }
  ```

  ##### Error Response

  Status: 400 Bad Request

  ```json
  {
    "error": "Email already in use"
  }
  ```

- **User Authentication:** `POST /login`
  - Authenticates a user in the API and returns a JWT token for access to protected endpoints.

  ##### Request Parameters

  - `email`: User's email address (string)
  - `password`: User's password (string)

  ##### Request Example

  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

  ##### Success Response

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

  ##### Error Response

  Status: 401 Unauthorized

  ```json
  {
    "error": "Email or password invalid"
  }
  ```


### Products

#### Endpoints

- **List All Products:** `GET /products`
  - Returns a list of all products available in the store, including their details, tags, and associated links.

  ##### Request Parameters

  None.

  ##### Request Example

  ```
  GET /products
  ```

  ##### Success Response

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

- **Product Details:** `GET /products/:id`
  - Returns the details of a specific product based on the provided ID, including its details, tags, and associated links.

  ##### Request Parameters

  - `id`: Product ID (integer)

  ##### Request Example

  ```
  GET /products/1
  ```

  ##### Success Response

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

  ##### Error Response

  Status: 404 Not Found

  ```json
  {
    "error": "Product not found"
  }
  ```

- **Create Product:** `POST /products`
  - Creates a new product in the store.

  ##### Request Parameters

  - `title`: Product title (string)
  - `description`: Product description (string)
  - `price`: Product price (number)
  - `urlProduct`: Product URL (string)
  - `productIMG`: Product image (file)
  - `category`: Product category (string)
  - `tags`: Array of tags associated with the product (array of strings)

  ##### Request Example

  ```json
  {
    "title": "New Product",
    "description": "Description of the new product",
    "price": 199.99,
    "urlProduct": "http://example.com/new-product",
    "productIMG": (product image),
    "category": "Category",
    "tags": ["Tag 1", "Tag 2"]
  }
  ```

  ##### Success Response

  Status: 201 Created

  ```json
  {
    "message": "Product created successfully"
  }
  ```

- **Update Product:** `PUT /products/:id`
  - Updates the information of an existing product in the store based on the provided ID.

  ##### Request Parameters

  - `id`: Product ID (integer)
  - `title`: Product title (string, optional)
  - `description`: Product description (string, optional)
  - `price`: Product price (number, optional)
  - `urlProduct`: Product URL (string, optional)
  - `productIMG`: Product image (file, optional)
  - `category`: Product category (string, optional)
  - `tags`: Array of tags associated with the product (array of strings, optional)

  ##### Request Example

  ```json
  {
    "title": "New product",
    "description": "New description of the product",
    "price": 249.99,
    "urlProduct": "https://www.example.com",
    "tags": ["Tag 1", "Tag 2", "Tag 3"]
  }
  ```

  ##### Success Response

  Status: 200 OK

  ```json
  {
    "message": "Product updated successfully"
  }
  ```

  ##### Error Response

  Status: 404 Not Found

  ```json
  {
    "error": "Product not found"
  }
  ```

- **Delete Product:** `DELETE /products/:id`
  - Deletes a product from the store based on the provided ID.

  ##### Request Parameters

  - `id`: Product ID (integer)

  ##### Request Example

  ```
  DELETE /products/1
  ```

  ##### Success Response

  Status: 200 OK

  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

  ##### Error Response

  Status: 404 Not Found

  ```json
  {
    "error": "Product not found"
  }
  ```
