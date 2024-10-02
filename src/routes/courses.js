const express = require('express');
const route = express.Router();

const CourseController = require('../app/controllers/CourseController')

route.get('/create', CourseController.create);
route.get('/store', CourseController.store);
route.get('/:slug', CourseController.show);

module.exports = route;