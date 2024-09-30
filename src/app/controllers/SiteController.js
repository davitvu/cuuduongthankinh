const Course = require('../models/Course');
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
    async home(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!' });
        }

        // res.render('home');
    }
}

module.exports = new SiteController;