const mongoose = require('mongoose');
const Schema2 = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Video = new Schema2({
    _id: {type:Number},
    channelId:{type:Number},
    name: { type: String,required:true},
    slug: { type: String, slug: "name",unique: true },
    description: { type: String, maxLenght: 600 },
    view:{type:Number},
    like:{type:Number},
    dislike:{type:Number},
    videoId : {type: String,required:true},
    image : {type: String}
},{
    _id:false,
    timestamps:true
});

Video.plugin(AutoIncrement);

module.exports = mongoose.model('Video', Video);