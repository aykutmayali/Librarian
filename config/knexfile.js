const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, '../db/library.db'),  
    },
    migrations: {
      directory: path.resolve(__dirname, '../migrations'),  
    },
    useNullAsDefault: true,
  }
};


// module.exports = {
//     development: {
//       client: 'sqlite3',
//       connection: {
//         filename: './db/library.db'
//       },
//       migrations: {
//         directory: './migrations'
//       },
//       useNullAsDefault: true
//     }
//   };
  