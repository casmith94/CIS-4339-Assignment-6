const mongodb = require('mongodb')
const mongodbClient = mongodb.MongoClient
const url = "http://127.0.0.1:27017"
const dbname = 'earthquakes'

const insertDB = () => {
    mongodbClient.connect(url, {useNewUrlParser: true}, (error, client) => {
        if(error){
            return console.log('Failed to connect to MongoDB')
            }
        console.log('Connection successful')
        const assigndb = client.db(dbName)
        assigndb.collection('octquakes').insertOne({
            time : "2020-05-04T14:45:55.720Z",
            latitude : 36.6060,
            longitude : 118.0629,
            depth : 4.7,
            mag : 2.1,
            magType : "mw",
            nst : null,
            gap : null,
            dmin : null,
            rms : null,
            net : null,
            id : null,
            updated : null,
            place : null,
            horizontal : null,
            depthError : null,
            magError : null,
            magNst : null,
            locationSource : null,
            magSource : null,
        }, (error, result) => {
            if(error){
                return console.log('Unable to write data')
            }
            console.log(result.ops) }
        )
        }) }
module.exports = {insertDB}