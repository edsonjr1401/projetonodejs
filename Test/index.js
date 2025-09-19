const express = require("express"); // <- IMPORTAR O EXPRESS
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')



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
    res.send("Texto:" +req.body.titulo+ "Conteudo:"+req.body.conteudo) 
})

app.listen(8081, function(){
    console.log("Serveidor Rodando!");
});
