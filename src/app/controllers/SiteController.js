// const Course = require("../models/Course");

class SiteController {
    // [GET] /
    // async home(req, res, next) {
    //     Course.find({})
    //         .lean()
    //         .then((courses) => res.render("home", { courses: courses }))
    //         .catch(next);
    // }

    index(req, res) {
        res.render('news');
    }
    
    search(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}
module.exports = new SiteController();