const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController')

route.get('/about', siteController.about);
route.get('/contact', siteController.contact);
route.get('/', siteController.home);

module.exports = route;