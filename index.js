const express = require("express"); // <- IMPORTAR O EXPRESS
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

Post.sync({force: false})


 //Config
   //Templete Engine
    app.engine('handlebars', engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars')

    // Bory Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
//ROTAS

    app.get('/cad', function(req, res){
    res.render("formulario")
})

    app.post('/add', function(req, res){
      Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
      }).then(function(){
         res.send("Post criado com sucesso!")
      }).catch(function(erro){
         res.send("Houve um erro: " +erro)
      })
})

app.listen(8081, function(){
    console.log("Serveidor Rodando!");
});
