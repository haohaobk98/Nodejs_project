var mongoose = require('mongoose');

// article schema
// schema : default to define fiels structure
var articleSchema = mongoose.Schema({
title:{
    type:String,
    required:true
},
author:{
    type:String,
    required:true
}
});
var Article = module.exports = mongoose.model('Article',articleSchema)