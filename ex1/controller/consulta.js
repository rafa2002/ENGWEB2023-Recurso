var Consulta = require('../models/consulta')
var Intervencao = require('../models/operacao')

// GET /consultas: devolve uma lista com todos os registos;
module.exports.list = () => {
    return Consulta
            .find()
            .sort({Freguesia: -1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


// GET /consultas/:id: devolve o registo com identificador id;
module.exports.getConsulta = id => {
    return Consulta.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


// GET /consultas?especie=EEEE: devolve a lista dos registos correspondentes à espécie EEEE;
module.exports.getConsultaIdade = idade => {
    return Consulta.find({idade: idade})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

// GET /consultas?implant=AAA: devolve a lista dos registos com implantação AAA;
module.exports.getConsultaSexo = sexo => {
    return Consulta.find({sexo: sexo})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

// GET /consultas/freguesias: devolve a lista de freguesias ordenada alfabeticamente e sem repetições;
module.exports.getNomes = () => {
    return Consulta.distinct('nome')
            .sort()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

// GET /consultas/especies: devolve a lista das espécies vegetais ordenada alfabeticamente e sem repetições;
module.exports.getInterv = () => {
    return Intervencao.distinct('codigo nome descricao ')
            .sort()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}


// POST /consultas: acrescenta um registo novo à BD;
module.exports.addConsulta = p => {
    return Consulta.create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

// DELETE /consultas/:id: elimina da BD o registo com o identificador id.
module.exports.deleteConsulta = id => {
    return Consulta.deleteOne({_id: id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}