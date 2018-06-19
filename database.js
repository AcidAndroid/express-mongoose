const mongoose = require('mongoose');
require('dotenv').load();

const server = process.env.MONGOSVR
const database = process.env.DATABASE

class Database{
    constructor(){
        mongoose.connect(`${server}`)
        .then(()=>{
            console.log('Conectado a la BD')
        })
        .catch((err)=>{
            console.log(`No se pudo conectar a la BD: ${err}`)
        })
    }


}

module.exports = new Database()