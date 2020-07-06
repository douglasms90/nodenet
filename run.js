// Módulos
	const express = require("express")
	const handlebars = require("express-handlebars")
	const bodyParser = require("body-parser")
	const app = express()
	const admin = require("./routes/admin")
	const path = require("path")


// Configurações
	// Body Parser
		app.use(bodyParser.urlencoded({extended: true}))
		app.use(bodyParser.json())
	// Views
		app.set('views', path.join(__dirname, 'views'))
	// Handlebars
    	app.engine("handlebars", handlebars({defaultLayout: "main"}))
		app.set("view engine", "handlebars")
	// Conexão com o banco de dados
		//...
	// Public
		app.use(express.static(path.join(__dirname, "public")))


// Rotas
	app.get("/", function(req, res){
		res.send("Rota principal")
	})

	app.get("/posts", function(req, res){
		res.send("Lista de posts")
	})

	app.use("/admin", admin)

// Outros
	app.listen(5100, function(){
		console.log("Server rodando...http://127.0.0.1:5100")
	})
