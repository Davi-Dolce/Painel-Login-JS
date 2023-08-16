exports.middlewareGlobal = (req, res, next) => {
    console.log();
    console.log(`Passou no Middleware Global`);
    console.log();

    //          aula 144
    // res.locals.umaVariavelLocal = 'Este é o valor da Variavel Local';

    next();
}
exports.middlewarAlternativo = (req, res, next) => {
    console.log(`Olá ${req.body.nome} ${req.body.sobrenome}`);
    next();
}