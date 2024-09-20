const { engine } = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => console.log(`app listening on http:/localhost:${port}`));