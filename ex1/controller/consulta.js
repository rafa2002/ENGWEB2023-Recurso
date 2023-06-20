var Consulta = require('../models/consulta')

// GET /consultas: devolve uma lista com todos os registos;
module.exports.list = () => {
    return Consulta.find()
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
    return Consulta.aggregate([
      { $unwind: "$operacoes" },
      { $group: { _id: "$operacoes.codigo", operacoes: { $first: "$operacoes" } } },
      { $sort: { _id: 1 } },
      { $project: { _id: 0, operacoes: { $objectToArray: "$operacoes" } } },
      { $project: { operacoes: { $arrayToObject: "$operacoes" } } }
    ])
      .then(dados => {
        const tuples = dados.map(item => Object.values(item.operacoes));
        return tuples;
      })
      .catch(erro => {
        return erro;
      });
  };


module.exports.addConsulta = (consulta) => {
    return Consultas.collection.insertOne(consulta)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
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