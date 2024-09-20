const express = require('express');
const route = express.Router();

const searchController = require('../app/controllers/SearchController');

route.use('/', searchController.search);


module.exports = route;