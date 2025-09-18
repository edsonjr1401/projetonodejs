const express = require("express"); // <- IMPORTAR O EXPRESS
const app = express();
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')


 //Config
   //Templete Engine
    app.engine('handlebars', engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars')
    
    // Conexão com o banco de dados Mysql
    const sequelize = new Sequelize('test', 'root', '6863', {
    host: "localhost",
    dialect: 'mysql'
})

//ROTAS

    app.get('/cad', function(req, res){
    res.render("formulario")
})

app.listen(8081, function(){
    console.log("Serveidor Rodando!");
});
