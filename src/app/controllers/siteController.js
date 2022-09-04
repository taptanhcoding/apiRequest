
class HandleData {
    // [Get] /videoData/:detail
    get(req,res,next) {

    }

    // [GET] /
    index(req,res,next) {
        res.render('home')
    }
}

module.exports = new HandleData