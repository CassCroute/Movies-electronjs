const apiAdresse = 'https://cc-movies-api.herokuapp.com/';
var API_KEY = '7173b5f46e24129d10872840ca78f916';

const { ipcRenderer } = require('electron')
const ipc = ipcRenderer
const fs = require('fs');
const path = require('path');

var userDataPath = process.env.APPDATA;

if (process.platform == 'darwin') {
    userDataPath = process.env.HOME + '/Library/Preferences/'
} else if (process.platform == 'linux') {
    userDataPath = process.env.HOME + '/.local/share/';
}

$.post(apiAdresse + 'getRandomNumber', { number: 21 }, function( dataAPICassCroute ) {
    $('#etat').html('Chargement de la<br>listes des média...');
    var data = JSON.stringify(dataAPICassCroute['result']);
    var pathAPIcc = path.join(userDataPath, 'dataAPICassCroute.json');
    fs.writeFileSync(pathAPIcc, data);
    var listeMovieDB = [];
    var i = -1;
        var intervalId = setInterval(function () {
            if ( i >= 0 && i <= 20)
            {
                var titreOriginalFilm = dataAPICassCroute['result'][i]['originalTitle'];
                var titreFilm = dataAPICassCroute['result'][i]['title'];
                $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + titreOriginalFilm + '&language=fr-FR', function(dataDBMovie) {
                    $('#etat').html('Chargement des infos<br> sur les média...');
                    var indice = 0;
                    if(dataDBMovie['results'][0]['media_type'] == 'person' || titreFilm == 'Aladdin disney' || titreFilm == 'Hulk') indice = 1;
                    if(titreFilm == 'Vendredi 13 (2009)') indice = 2;
                    var dataDBMovie2 = dataDBMovie['results'][indice];
                    listeMovieDB.push(dataDBMovie2);
                    if (listeMovieDB.length == 21) {
                        data = JSON.stringify(listeMovieDB);
                        var pathAPImdb = path.join(userDataPath, 'dataAPIDBMovie.json');
                        fs.writeFileSync(pathAPImdb, data);
                        ipc.send('loaded')
                    }
                });
            }
        if ( listeMovieDB.length == 21 ) clearInterval(intervalId);
        i++;
    },300); 

});
