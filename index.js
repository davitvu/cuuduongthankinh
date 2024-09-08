const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => res.send("concat"));

app.listen(port, () => console.log(`app listening on http:/localhost:${port}`));