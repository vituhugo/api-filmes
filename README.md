# SEQUELIZE, o que é? 

## Definição
    
## Pra que serve

## ORM


# instalar sequelize no projeto:

## depedencia
`npm install sequelize`

## command line
`npm install sequelize-cli`

## driver mysql
`npm install mysql2`



# configurando sequelize

## arquivo de configuração de acesso ao banco config/database.js
```
// config/database.js
module.exports = {
    username: 'root',
    password: '',
    database: 'nodejs',
    host: 'localhost',
    dialect: 'mysql'
};
```

## arquivo de configuração para apontar para o sequelize onde está o arquivo

```
// .sequelizerc
const path = require('path');

module.exports = {
    'config': path.resolve('config', 'database.js')
}
```