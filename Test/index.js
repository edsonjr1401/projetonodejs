const express = require("express")
const app = express();


app.get('/', function(req, res){
    res.sendFile(__dirname+ "/html/index.html");
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

app.get('/blog', function(req, res){
    res.sendFile(__dirname + "/html/blog.html");
})

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h1>Sua cor favorita é: "+req.params.cor+"</h3>"+"<h2>Seu cargo é: "+req.params.cargo+"</h2");
  
})


app.listen(8081, function(){
    console.log("Serveidor Rodando!");
});
