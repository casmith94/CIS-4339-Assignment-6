const express = require("express"),
ejs = require("ejs"),
bodyParser = require("body-parser"),
equakes = require('./model/octquakes'),
app = express(),
methodOverride = require('method-override');

require('./mongooseConnect')

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/', async(req, res) => {
    try{
        const quake = await equakes.find({})
        res.render('index',{quake: quake})
    } catch(error){
        res.status(500).send(error);
    }
});

app.get("/add", async (req, res) => {
    try{
        const quake = await equakes.find({})
        res.render('add', { quake: quake })
    } catch(error){
        res.status(500).send(error);
    }
});

app.get("/delete", async (req, res) => {
    try{
        const quake = await equakes.find({})
        res.render('delete', { quake: quake })
    } catch(error){
        res.status(500).send(error);
    }
});

app.post("/addquake", async (req, res) => {
    try {
        const quake = new equakes(req.body);
        await quake.save();
        res.render('addquake', {quake: quake})
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/deleted", async (req, res) => {
    try {
        
        const quake = await equakes.find({})
        
        await equakes.deleteOne(req.body);
        res.render('deleted', {quake: quake})
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/result", async (req, res) => {
    try {
        const quake = await equakes.find({});
        const search = await equakes.find(req.body);
        console.log(search.length)
        res.render('result', {search: search})
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})