const mongoose = require('mongoose')

const dbSchema = mongoose.Schema({
    _id : { type: String},
    time : {type: String},
    latitude : {type: Number},
    longitude : {type: Number},
    depth : {type: Number},
    mag : {type: Number},
    magType : {type: String},
    nst : {type: Number},
    gap : {type: Number},
    dmin : {type: Number},
    rms : {type: Number},
    net : {type: String},
    updated : {type: String},
    place : {type: String},
    horizontalError : {type: Number},
    depthError : {type: Number},
    magError : {type: Number},
    magNst : {type: Number},
    locationSource :{type: String},
    magSource : {type: String}
});

const equakes = mongoose.model('octquakes', dbSchema)

module.exports = equakes;