const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;
const mongoose = require('mongoose');

const Favorite = require('./models/favorite.js');

const app = express();

app.use(bodyParser.json());

app.get('/favorites', async (req, res) => {
    const favorites = await Favorite.find();
    res.status(200).json({
        favorites: favorites,
    });
});

app.post('/favorites', async (req, res) => {
    const favName = req.body.name;
    const faveType = req.body.type;
    const faveUrl = req.body.url;

    try {
        if (faveType !== 'movie' && faveType !== 'character') {
            throw new Error('"type" should be "movie" or "character"!');
        }
        const existingFav = await Favorite.findOne({ name: faveName });
        if (existingFav) {
            throw new Error('Favorite exists already!');
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    const favorite = new Favorite({
        name: favName,
        type: faveType,
        url: faveUrl,
    });

    try {
        await favorite.save();
        res
            .status(201)
            .json({ message: 'Favorite saved!', favorite: favorite.toObject() });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

app.get('/movies', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/films');
        res.status(200).json({ movies: response.data });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'});
    }
});

app.get('/people', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/people');
        res.status(200).json({ movies: response.data });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'});
    }
});

mongoose_main().catch((err) => {
    console.log(err)
})

async function mongoose_main() {
    await mongoose.connect(
        'mongodb://172.17.0.2:27017/swFavorites',  
    );
    app.listen(3000)
}
