const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://useradmin:1234@fiaptecnico.zg8lq.mongodb.net/test')
}

module.exports = conexao
