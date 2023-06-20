var express = require('express');
var router = express.Router();
var Consulta = require('../controllers/consulta')
var Intervencao = require('../controllers/operacao')


router.get('/consultas', function(req, res) {
  // GET /consultas?idade=EEEE
  if (req.query.idade != undefined){
    Consulta.getConsultaIdade(req.query.idade)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro"}))
  }
  // GET /consultas?sexo=AAA
  else if (req.query.sexo != undefined){
    Consulta.getConsultaSexo(req.query.sexo)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro"}))
  }
  // GET /consultas
  else{
    Consulta.list()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro"}))
  }
})

// GET /consultas/freguesias
router.get('/consultas/nomes', function(req, res){
  Consulta.getNomes()
  .then(dados => res.status(200).json(dados))
  .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro"}))
})

// GET /consultas/especies
router.get('/consultas/interv', function(req, res){
  Intervencao.getInterv()
  .then(dados => res.status(200).json(dados))
  .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro"}))
})

// GET /consultas/:id
router.get('/consultas/:id', function(req, res){
  Consulta.getConsulta(req.params.id)
  .then(dados => res.status(200).json(dados))
  .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro"}))
})

// POST /consultas: acrescenta um registo novo à BD
router.post('/consultas', function(req, res) {
  Consulta.addConsulta(req.body)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui adicionar a consulta!"}))
});


// DELETE /consultas/:id: elimina da BD o registo com o identificador id
router.delete('/consultas/:id', function(req, res) {
  Consulta.deleteConsulta(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui apagar a consulta!"}))
});

module.exports = router;