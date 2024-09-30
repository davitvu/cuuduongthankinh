const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsController')

route.get('/news-details', newsController.newsDetails);
route.get('/', newsController.news);

module.exports = route;