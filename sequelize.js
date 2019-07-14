const Sequelize = require('sequelize')
const ProjectModel = require('./app/models/project.model')

const sequelize = new Sequelize('labshrms', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = ProjectModel(sequelize, Sequelize);

// comment this for view integration
/*
sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    })
*/

module.exports = {
    User
}
