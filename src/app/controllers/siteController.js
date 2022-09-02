
class HandleData {
    // [Get] /videoData/:detail
    get(req,res,next) {

    }

    // [GET] /videoData
    index(req,res,next) {
        res.render('home')
    }
}

module.exports = new HandleData