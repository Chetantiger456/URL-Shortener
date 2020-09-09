const mongoose = require('mongoose')
const shorthash = require('shorthash')
const { default: validator } = require('validator')

const Schema = mongoose.Schema

const urlSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    originalUrl : {
        type: String,
        validate: {
            validator: function(value) {
                return validator.isURL(value)
            },
            message:  props => `${props.value}, is not a valid URL`
        },
        required: true
    },
    hashedUrl : {
        type: String,
       // required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

urlSchema.pre('save', function(next){
   // console.log(this.originalUrl)
   const hashedUrl = shorthash.unique(this.originalUrl)
   console.log(hashedUrl)
   this.hashedUrl = hashedUrl
    next()
})

const Url = mongoose.model('Url', urlSchema)

module.exports = Url