require('dotenv').config()
var keys = require('./keys');

var command = process.argv[2];
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

if (command === 'spotify-this-song') {
spotifySearch(process.argv[3]);
}else if (command === 'ombd-this-movie')
function spotifySearch(song) {
    spotify.search({ type: 'track', query: song, limit: 1, market: 'US' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(JSON.stringify(data.tracks.items[0], null, 2));
    });
}
var getMovie = function(movieNmae) {
    
    request('http://www.omdbapi.com/?i=' + movieName + 'tt3896198&apikey=f8deecd0',
        function(err, response, body) {
            if(err) {
                return console.log (err)
            };
        }
    }
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });




