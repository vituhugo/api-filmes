const Sequelize = require('sequelize');
const config = require('./../config/database');

var FilmeController = {
    index: async (req, res) => {
        const db = new Sequelize(config);

        // const result = await db.query("SELECT * FROM filmes", {type: Sequelize.QueryTypes.SELECT})
        // const result = await db.query("SELECT * FROM atores", {type: Sequelize.QueryTypes.SELECT})
        // const result = await db.query("SELECT * FROM filmes where id = 10", {type: Sequelize.QueryTypes.SELECT})
        // const result = await db.query("SELECT * FROM episodes", {type: Sequelize.QueryTypes.SELECT})
        const result = await db.query("SELECT * FROM atores ORDER BY nome, sobrenome", {type: Sequelize.QueryTypes.SELECT})
        console.log(result);
        res.send('Olá');
    }
}

module.exports = FilmeController;