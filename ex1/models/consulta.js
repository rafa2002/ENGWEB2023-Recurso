var mongoose = require('mongoose');

var operacaoSchema = new mongoose.Schema({
    "codigo": String,
    "nome": String,
    "descricao": String,
});

var consultaSchema = new mongoose.Schema({
    "nome": String,
    "nif": Number,
    "idade": Number,
    "sexo": String,
    "data": String,
    "nr_operacoes": Number,
    "operacoes": [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'operacao'
    }],
    "_id": Number,
});

module.exports = {
    consulta: new mongoose.model('consulta', consultaSchema),
    operacao: new mongoose.model('operacao', operacaoSchema)
};