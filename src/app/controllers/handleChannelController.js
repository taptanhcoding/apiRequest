const Channel = require('../models/Channel')

class HandleChannel {
    // [GET] /video/add
    add(req,res,next) {
        res.render('channel/add-channel')
    }

    //[POST] /channel/store

    store(req,res,next) {
        const channel = new Channel(req.body)
        channel.save()
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }

    // [GET] /video/list 
    list(req,res,next) {
        Channel.find()
            
    }


    // [Get] /video/:detail
    get(req,res,next) {

    }

    // [GET] /videoData
    index(req,res,next) {
        
    }
}

module.exports = new HandleChannel