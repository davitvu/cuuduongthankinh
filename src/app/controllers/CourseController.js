const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] => /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    // [GET] => /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] => /course/:tore
    store(req, res, next) {
        
    }
}

module.exports = new CourseController;