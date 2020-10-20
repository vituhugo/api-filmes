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
# Usando Raw Queryes

## importar o sequelize e config
## instanciar um objeto através do sequelize passando a config e nomeando de db

# Objeto DB métodos

## query
    ```
    result = await db.query("QUERY SQL", {
        type:Sequelize.QueryTypes.SELECT
        replacements: {}
    })
    ```


// Métodos de Consulta //////////////////////////////////////

// Busca pelo id
Filme.findById(id)

// Busca todos os registros
Filme.findAll(OPTIONS)

// Busca o primeiro registro
Filme.findOne(OPTIONS)



// OPTIONS
// Clausulas SQL você que escolhe as opções que quer na busca, podendo utilizar wher, orderBy, limit, offset etc...
{
    where: {
        // IGUAL A 1
        genero_id: 1
        // DIFERENTE DE 1
        genero_id: {[Op.ne]: 1}
    },
    orderBy: {nome_da_coluna: "ASC ou DESC"},
    limit: 10
}



Op.ne = "banana"
genero_id: {banana: 1}

///////////////////////////////////////////////////////////////////////////////////////////

CRUD

Read
findOne, findAll e findById

Create
create
const filme_blabla = await Filme.create({nome: blabla, genre_id: blafbla, nota: blablabla})
// Já retorna o id no objeto filme_blabla

Update
Model.update(DADOS, OPTIONS)
Filme.update({nome: blibli}, {where: {id: 1}})

Delete
Model.destroy(OPTIONS)






///////////////////////// PLANO PRO ADMINISTRATIVO MODULO DE FILME

Serão tes telas
Formulão de edição
Formulario de criação
Listagem de Filmes - Tem botão para adicionar, editar e remover um filme.


