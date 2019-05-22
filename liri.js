require('dotenv').config()
var keys = require('./keys.js');
var axios = require('axios');

var command = process.argv[2];
var Spotify = require('node-spotify-api');

var getMovie = function(movieName) {
    movieName = process.argv[3]
    
    var queryUrl= 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';
axios.get(queryUrl)
  .then(
      function (response) {
    console.log(response.data.Actors,"\n","xxxxxxxxxxxxxxxxxxxxxxxxxxxx","\n",response.data.Plot);
  })
  .catch(function (error) {
    console.log(error);
  });
}

if (command === 'movie') {
    getMovie();
    }

    var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
})


}else if (command === 'ombd-this-movie'){

}

function spotifySearch(song) {
    spotify.search({ type: 'track', query: song, limit: 1, market: 'US' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(JSON.stringify(data.tracks.items[0], null, 2));
    });
}




