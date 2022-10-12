'use strict';

const apiAdresse = 'https://cc-movies-api.herokuapp.com/';
var API_KEY = '7173b5f46e24129d10872840ca78f916';

const fs = require('fs');

$.post(apiAdresse + 'getRandomNumber', { number: 21 }, function( dataAPICassCroute ) {
    var data = JSON.stringify(dataAPICassCroute);
    fs.writeFileSync('dataAPICassCroute.json', data);
    var listeMovieDB = [];
    for (i = 0; i < dataAPICassCroute.length; i++) {
        var titreOriginalFilm = dataAPICassCroute['result'][i]['originalTitle'];
        var titreFilm = dataAPICassCroute['result'][i]['title'];
        $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + titreOriginalFilm + '&language=fr-FR', function(dataDBMovie) {
            var indice = 0;
            var lenghtDataDBMovie = dataDBMovie['results'].length;
            while (lenghtDataDBMovie > indicehere) {
                var titreFind = dataDBMovie['results'][indicehere]['original_title'] == 'titreOriginalFilm'
                if ( titreFind ) {
                    indice = indicehere;
                    break;
                }
                indicehere++;
            } 
            if(dataDBMovie['results'][0]['media_type'] == 'person' || titreFilm == 'Aladdin disney' || titreFilm == 'Hulk') indice = 1;
            if(titreFilm == 'Vendredi 13 (2009)') indice = 2;

            listeMovieDB.push(dataDBMovie['results'][indice]);
        });
    }
    data = JSON.stringify(listeMovieDB);
    fs.writeFileSync('dataAPIDBMovie.json', data);
});
