const handleChannel = require('./channels')
const handleVideo = require('./videos')
const siteData = require('./site')



function route(app) {
    app.use('/channel', handleChannel)
    app.use('/video', handleVideo)
    app.use('/',siteData)
}

module.exports = route