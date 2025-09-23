const express = require("express"); // <- IMPORTAR O EXPRESS
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

Post.sync({force: false})

//Config
   //Template Engine
    app.engine('handlebars', engine({ 
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }));
    app.set('view engine', 'handlebars')

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
//ROTAS

  app.get('/', function(req, res){
    Post.findAll().then(function(posts){
      // Converter para JSON para garantir compatibilidade com Handlebars
      const postsData = posts.map(post => post.toJSON());
      res.render('home', {posts: postsData})
    }).catch(function(erro){
      console.log("Erro ao buscar posts:", erro);
      res.render('home', {posts: []})
    })
  })

    app.get('/cad', function(req, res){
    res.render("formulario")
})

    app.post('/add', function(req, res){
      Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
      }).then(function(){
         res.redirect('/')
      }).catch(function(erro){
         res.send("Houve um erro: " + erro)
      })
})

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081!");
});