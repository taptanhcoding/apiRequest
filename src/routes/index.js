const videoData = require('./channels')
const siteData = require('./site')



function route(app) {
    app.use('/videodata', videoData)
    app.use('/',siteData)
}

module.exports = route