const express = require("express")
const router = express.Router()


router.get("/", function(req, res){
	res.render("admin/index")
})

router.get("/posts", function(res, req){
	res.send("Página de posts")
})

router.get("/categorias", function(res, req){
	res.send("Página de categorias")
})

router.get("/teste", function(res, req){
	res.send("isso é um teste")
})


module.exports = router