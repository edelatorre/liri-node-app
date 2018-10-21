require("dotenv").config();

let dataKeys = require("./keys.js");

let Spotify = require('node-spotify-api');

let space = "\n" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";

function getMeSpotify(songName) {
    let spotify = new Spotify(dataKeys.spotify);
    // If there is no song name, set the song to Blink 182's What's my age again
    if (!songName) {
        songName = "What's my age again";
    }
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            output =
                "================= LIRI FOUND THIS FOR YOU...==================" +
                space + "Song Name: " + "'" + songName.toUpperCase() + "'" +
                space + "Album Name: " + data.tracks.items[0].album.name +
                space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +
                space + "URL: " + data.tracks.items[0].album.external_urls.spotify;
            console.log(output);
            //writeToLog(output);
        }
    });

}

getMeSpotify('yellow');
