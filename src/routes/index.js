const newsRoute = require('./news');
const coursesRoute = require('./courses');
const siteRoute = require('./site');
const searchRoute = require('./search');

function route(app) {
    app.use('/news', newsRoute);
    app.use('/courses', coursesRoute);
    app.use('/search', searchRoute);
    app.use('/', siteRoute);
}

module.exports = route;