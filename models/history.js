module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define('history', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        region: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        thumbnail: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.TEXT
        }
    });
    return History;
}