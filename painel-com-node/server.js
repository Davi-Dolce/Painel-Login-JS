// Iniciando Express
const express = require('express');
const app = express();

// Cód para Enviar Post
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('./public'))

// DB Connection
require('dotenv').config();
const mongoose = require("mongoose");
const connectionString = process.env.CONNECTIONSTRING
mongoose.set('strictQuery', true);
mongoose.connect(connectionString)
    .then(() => {
        app.emit('dbConnected');
        console.log("DB CONNECTED");
    })
    .catch(e => console.log(e));

// Aula 142 - session / flash msgs
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const sessionOptions = session({
    secret: 'cdsfafsfs asfaraf fa fafasdfa ds',
    store: MongoStore.create({
        mongoUrl: connectionString
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions);
app.use(flash());

// Rotas e Middlewares
const routes = require('./routes');
const {
    middlewareGlobal
} = require('./src/middlewares/middleware')
app.use(middlewareGlobal);
app.use(routes);

// Config Views
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Iniciando Servidor
app.on('dbConnected', () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000");
        console.log("servidor executando na porta 3000");
    })
});