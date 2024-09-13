const { engine } = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/test', (req, res) => {
    res.render('test');
});

app.listen(port, () => console.log(`app listening on http:/localhost:${port}`));