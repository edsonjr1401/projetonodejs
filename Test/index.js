const express = require("express")
const app = express();
const handlebars = require('express-handlebars')


 //Config
   //Templete Engine
     app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view handlebars.engine', 'hanldebars')



app.listen(8081, function(){
    console.log("Serveidor Rodando!");
});
