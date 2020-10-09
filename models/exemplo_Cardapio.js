module.exports = (sequelize, DataTypes) => {
    const Cardapio = sequelize.define('Cardapio', {
        // NOME_DO_CAMPO: TIPO_DO_CAMPO
        // auto-increment, inteiro, chave primaria 
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        ingredients: DataTypes.STRING,
        preco: DataTypes.FLOAT
    }, {tableName: 'cardapio', timestamps:false})
    return Cardapio;
}