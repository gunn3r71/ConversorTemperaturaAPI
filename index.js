const express = require('express');
const app = express();
const calculadora = require('./services/calculoImc');
const port = 8080;


app.get('/', (req, res) => {
    res.send("Olá");
});

app.get('/conversor-temperaturas', (req,res) => {

})

app.get('/calcular-imc', (req,res)=>{
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = calculadora.imc(peso, altura);

    res.json({resultado : imc});
})

app.listen(port, () => {
    console.log(`
    listening at http://localhost:${port}
                 https://localhost:${port}
    `)
});