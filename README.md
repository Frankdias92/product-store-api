

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