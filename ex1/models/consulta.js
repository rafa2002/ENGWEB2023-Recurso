var mongoose = require('mongoose');


var consultaSchema = new mongoose.Schema({
    "nome": String,
    "nif": Number,
    "idade": Number,
    "sexo": String,
    "data": String,
    "nr_operacoes": Number,
    "operacoes": [{
        "codigo": String,
        "nome": String,
        "descricao": String,
    }],
    "_id": Number,
});

module.exports = mongoose.model('consulta', consultaSchema);