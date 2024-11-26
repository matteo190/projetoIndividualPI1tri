var express = require("express");
var router = express.Router();

var energiaController = require("../controllers/energiaController");
router.post("/energia/:id",function(req,res){
    energiaController.energiaPorUsuario(req,res)
})
router.get("/energiatotal/:id",function(req,res){
    energiaController.buscarEnergia(req,res)
})
module.exports = router 
