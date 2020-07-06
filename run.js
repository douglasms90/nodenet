const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Sequelize  = require("sequelize")
const path = require("path")
const app = express()
const admin = require("./routes/admin")


// Configurações
  // Body Parser
		app.use(bodyParser.urlencoded({extended: false}))
		app.use(bodyParser.json())
	// Handlebars
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
		app.set("view engine", "handlebars")
	// Conexão com o banco de dados
		//...
	// Public
		app.use(express.static(path.join(__dirname, "public")))
// Rotas
		app.get("/cad", function(req, res){
			res.render("formulario")
		})

		app.post("/add", function(req, res){
			res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
		})

// Outros
app.listen(5100, function(){
  console.log("Server rodando...http://127.0.0.1:5100")
})
