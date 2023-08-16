const mongoose = require("mongoose");

async function main() {

    try {

        mongoose.set('strictQuery', true);
        await mongoose.connect("mongodb+srv://thiagosiniero:TL7EBsPGWANQZaoy@cursojs.qzr8viw.mongodb.net/?retryWrites=true&w=majority");
        console.log('DB Connected');

    } catch (error) {
        console.log(`Erro: ${error}`);
    }

} 

module.exports = main;