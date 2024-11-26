var database = require("../database/config")
function energiaPorUsuario(idusuario, energia){
    var instrucao = `select * from grafico where fkusuario = ${idusuario}`
    return database.executar(instrucao)
    .then((resultado) => {
        if (resultado.length == 0){
            var instrucaoinsert = `insert into grafico (energia, fkusuario) values (${energia},${idusuario})`
            return database.executar(instrucaoinsert)
        } else {
            var instrucaoupdate = `update grafico set energia = ${energia} where fkusuario = ${idusuario}`
            return database.executar(instrucaoupdate)
        }
    })
}
function buscarEnergiaPuser(idusuario){
    var instrucao = `select * from grafico where fkusuario = ${idusuario}`
    return database.executar(instrucao)
}
module.exports = {
    energiaPorUsuario,
    buscarEnergiaPuser
}