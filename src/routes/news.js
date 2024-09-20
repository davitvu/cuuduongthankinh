const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsController')

route.use('/news-details', newsController.newsDetails);
route.use('/', newsController.news);

module.exports = route;