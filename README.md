# Librarian

A simple library management system built with Node.js, Express, SQLite3, and Knex.js.

## Table of Contents
- [Installation](#installation)
- [Database Migrations](#database-migrations)
- [Development](#development)
- [Docker](#docker)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

---

## Installation

### Creating Git Repo
    echo "# Librarian" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/aykutmayali/Librarian.git
    git push -u origin main

### 1. Clone the repository
```bash
git clone https://github.com/aykutmayali/Librarian.git
cd Librarian
```

## Installation
```bash
    npm init -y
```   
### Install necessary dependencies:
```bash
    npm install express knex sqlite3 body-parser express-validator
    npm install --save-dev nodemon
```
    - Express: A minimal web framework for Node.js.
    - Knex: SQL query builder for handling database queries.
    - SQLite3: A simple relational database for this use case.
    - Express-validator: For request validation.
    - Nodemon: Automatically restarts the server on file changes
    
## Database Migrations
```bash
    npx knex migrate:make create_users --knexfile ./config/knexfile.js
    npx knex migrate:make create_books --knexfile ./config/knexfile.js
    npx knex migrate:make create_borrowed_books --knexfile ./config/knexfile.js
```    
    - Permissions:
```bash
    chmod -R 755 db/
```
    - After defining migrations
```bash
    npx knex migrate:latest --knexfile ./config/knexfile.js
```
#### Create Models, Controllers, Routes as defined, in their own paths

## Development
```bash
    npm run dev (developer mode)
```
## Docker
### Build Docker Image 
```bash
    docker build -t librarian .
```
### Run Docker Image
```bash
    docker run -p 3000:3000 -v $(pwd)/db:/usr/src/app/db librarian
```

## API Documentation

The API is documented using Postman. The Postman Collection is located in the `API Collection` folder.

### Example Routes

- `GET /users`: Retrieve all users
- `POST /users`: Create a new user
- `GET /books`: Retrieve all books
- `POST /users/:userId/borrow/:bookId`: Borrow a book
- `POST /users/:userId/return/:bookId`: Return a book

## Contributing

1. Fork the repository.
2. Create a new branch:
```bash
   git checkout -b feature-branch
```
3. Commit your changes:
```bash
   git commit -m 'Add new feature'
```
4. Push to the branch:
```bash
   git push origin feature-branch
```
5. Create a new Pull Request