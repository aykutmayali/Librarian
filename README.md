# Librarian

## Creating Git Repo
    echo "# Librarian" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/aykutmayali/Librarian.git
    git push -u origin main

## Initialize
    npm init -y
    
### Install necessary dependencies:
    npm install express knex sqlite3 body-parser express-validator
    npm install --save-dev nodemon

    - Express: A minimal web framework for Node.js.
    - Knex: SQL query builder for handling database queries.
    - SQLite3: A simple relational database for this use case.
    - Express-validator: For request validation.
    - Nodemon: Automatically restarts the server on file changes
    
#### Create tables using knex migration:

    npx knex migrate:make create_users --knexfile ./config/knexfile.js
    npx knex migrate:make create_books --knexfile ./config/knexfile.js
    npx knex migrate:make create_borrowed_books --knexfile ./config/knexfile.js
    
    - Permissions
    chmod -R 755 db/

    - After defining migrations
    npx knex migrate:latest --knexfile ./config/knexfile.js
