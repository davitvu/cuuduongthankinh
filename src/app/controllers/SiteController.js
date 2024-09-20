
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
    home(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;