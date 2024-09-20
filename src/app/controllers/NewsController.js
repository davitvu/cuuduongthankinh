
class NewsController {
    // [GET] => /news
    news(req, res) {
        res.render('news');
    }

    // [GET] => /news-details
    newsDetails(req, res) {
        res.render('news-details');
    }
}

module.exports = new NewsController;