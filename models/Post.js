const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRINGS
    }, 
    conteudo: {
        type: db.Sequelize.TEXT
}
})

modeule.exports = Post