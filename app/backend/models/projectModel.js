const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    title:{
        type: String,
        required:true,

    },
    description:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true,
        // format:file,
    },
    tags:{
        type:[String],
        required:true
    },
    gitUrl:{
        type:String,
        required:true

    },
    previewUrl:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Project', projectSchema)