const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Channel = new Schema({
    name: { type: String,required:true},
    slug: { type: String, slug: "name",unique: true },
    follower:{type:Number,default:0},
    tick:{type:Boolean,default:false},
    image : {type: String,required:true}
},{
    timestamps:true
});

Channel.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Channel', Channel);