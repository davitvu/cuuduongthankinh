const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] => /about
    about(req, res) {
        res.render('about');
    }

    // [GET] => /contact
    contact(req, res) {
        res.render('contact');
    }

    // [GET] => /home
    home(req, res, next) {
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (err) {
        //     next(err);
        // }

        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                 });
            })
            .catch(next);

        // res.render('home');
    }
}

module.exports = new SiteController;