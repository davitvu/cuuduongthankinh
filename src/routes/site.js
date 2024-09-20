const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController')

route.use('/about', siteController.about);
route.use('/contact', siteController.contact);
route.use('/', siteController.home);

module.exports = route;