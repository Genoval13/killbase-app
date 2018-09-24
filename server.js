const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');

const assassins = require('./routes/assassins');
const contracts = require('./routes/contracts');

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join('public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    res.render('index', {title: 'Killbase'});
});

app.use(assassins);
app.use(contracts);


app.use((_req, res) => {
    res.sendStatus(404);
})

app.use((err, _req, res) => {
    if (err.status) {
        return res
            .status(err.status)
            .set('Content-type', 'text/plain')
            .send(err.message);
    }

    console.error(err.stack);
    res.sendStatus(500);
})

app.listen(PORT , () => {
    console.log("This is Port", PORT);
})