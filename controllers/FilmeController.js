const Sequelize = require('sequelize');
const config = require('./../config/database');

var FilmeController = {
    index: async (req, res) => {
        const db = new Sequelize(config);

        const result = await db.query("SELECT * FROM atores")
        console.log(result);
        res.send('Olá');
    }
}

module.exports = FilmeController;