exports.paginaInicial = (req, res, next) => {
    res.render('index');
    next();
}

exports.trataPost = (req, res, next) => {
    if (req.body !== undefined) {
        res.send(`Nome Enviado = ${req.body.nome} <br> Senha Enviada = ${req.body.sobrenome} <br> <a href="/">Home</a> `)
    } else {
        res.render('index');
    }
}

//                                                  aula 140 - criando model
/*
const HomeModel = require('../models/HomeModel');
HomeModel.create({
    titulo: 'Um Titulo de Testes',
    descricao: 'descrição de testes.'
})
    .then(dados => console.log(dados))
*/

//                                                  aula 142 - session / flash msg
/*
exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: "Thiago", logado: true };
    console.log(req.session.usuario);
    req.flash('info', 'Olá Mundo');
    req.flash('error', 'Errrouuu');
    req.flash('success', 'Sucessssooo');
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    next();
}
*/

//                                                  aula 144 - add conteudo nos views
/*
exports.paginaInicial = (req, res, next) => {
    res.render('index', {
        titulo: "<br> Este é o Titulo da Página",
        conteudo: "Este é o conteudo",
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    next();
}
*/