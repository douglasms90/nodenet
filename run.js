const express = require("express")
const app = express()


app.get("/", function(Req, res){
  res.sendfile(__dirname + "/templates/index.html")
})

app.get("/suporte", function(req, res){
  res.sendfile(__dirname + "/templates/suporte.html")
})


app.listen(5100, function(){
  console.log("Server rodando...http://127.0.0.1:5100")
})
