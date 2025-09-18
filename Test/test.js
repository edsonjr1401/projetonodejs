const { Console } = require('console')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '6863', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "UM TITULO ALEATORIO",
//     conteudo: "aleatoiro tambem"
// })


const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


Usuario.create({
    nome: "Edson",
    sobrenome:"Junior",  
    idade: 24,
    email: "meupresida@gmail.com"

})

//Usuario.sync({force: true})

//Postagem.sync({force: true});




// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falhaa ao se conectar: "+erro)
// })