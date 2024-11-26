var energiaModel = require("../models/energiaModel");

function energiaPorUsuario(req,res){
    var idusuario = req.params.id
    var energia = req.body.energia
    energiaModel.energiaPorUsuario(idusuario, energia)
    .then((resultado) => {
        res.status(200).json(resultado)
    }).catch((erro) => {
        res.status(500).json(erro.sqlMessage)
    })
}
function buscarEnergia(req,res){
    var idusuario = req.params.id
    energiaModel.buscarEnergiaPuser(idusuario)
    .then((resultado) => {
        res.status(200).json(resultado)
    }).catch((erro) => {
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
    energiaPorUsuario,
    buscarEnergia
}