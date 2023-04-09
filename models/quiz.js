module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quiz: {
            type: Sequelize.STRING
        },
        options: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        key: {
            type: Sequelize.STRING
        },
        categoryId: {
            type: Sequelize.INTEGER
        },
        levelId: {
            type: Sequelize.INTEGER
        }
    });
    return Quiz;
}