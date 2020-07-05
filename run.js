const express = require("express")
const app = express()
const Sequelize  = require("sequelize")
const handlebars = require("express-handlebars")


// Config
  // Template Engine
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
		app.set("view engine", "handlebars")

	// Conexão com o banco de dados
		const sequelize = new Sequelize("test", "root", "123456", {
			host: "localhost",
			dialect: "mysql"
		})

// Rotas
		app.get("/cad", function(req, res){
			res.render("formulario")
		})

		app.get("/add", function(req, res){
			res.send('FORMULARIO')
		})

///app.get("/", function(req, res){
//  res.sendfile(__dirname + "/views/templates/index.html")
//})

//app.get("/suporte", function(req, res){
//  res.sendfile(__dirname + "/views/templates/suporte.html")
//})

app.listen(5100, function(){
  console.log("Server rodando...http://127.0.0.1:5100")
})
