const movies = require('./movies.json')
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json(movies);
})

app.listen(process.env.PORT ?? 8080);

