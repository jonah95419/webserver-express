const expres = require('express');
const app = expres();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.port || 3000;

app.use(expres.static(__dirname + '/public'))
    //express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jhonatan sAlazar'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

/*
app.get('/', (req, res) => {
    //res.send('hola mundo')
    let salida = {
        nombre: 'Jhonatan',
        edad: 23,
        url: req.url
    }
    res.send(salida)
})
*/
/*
app.get('/jojo', (req, res) => {
    res.send('hola data');
})
*/
app.listen(port, () => {
    console.log(`escuchando peticiones en el purto ${port}`);
});