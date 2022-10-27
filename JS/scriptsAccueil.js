const apiAdresse = 'https://cc-movies-api.herokuapp.com/';
const API_KEY = '7173b5f46e24129d10872840ca78f916';

var afficheTitrePosterLien = [];

function InitAccueil()
{
    $.post(apiAdresse + 'getRandomNumber', { number: 20 }, function( data ) {
        var i = -1;
        var intervalId = setInterval(function () {
            if ( i >= 0 )
            {
                var titreOriginalFilm = data['result'][i]['originalTitle'];
                var titreFilm = data['result'][i]['title'];
                var lienFilm = data['result'][i]['link'];
                var dateSortie = data['result'][i]['dateSortie'];

                getMoviePosterAccueil(titreOriginalFilm, titreFilm, dateSortie).then(function(returndata) {
                    var img = returndata['poster'];
                    var imgObj = new Image();
                    imgObj.crossOrigin = "Anonymous";
                    imgObj.src = img + "?not-from-cache-please-stp";
                    afficheTitrePosterLien.push(
                        {
                            titreOriginalFilm:titreOriginalFilm, 
                            titreFilm: titreFilm,
                            lienFilm: lienFilm,
                            img: imgObj.src
                        }
                    );
                });
            }
            if ( i == 19 ) clearInterval(intervalId);
            i++;
        },50);
    });
    console.log(afficheTitrePosterLien);
}

function getMoviePosterAccueil(titreOriginalFilm, titreFilm, dateSortie){
    return $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&primary_release_year=' + dateSortie + '&query=' + titreOriginalFilm + '&language=fr-FR').then(function(dataMovie){
        var poster = 'https://image.tmdb.org/t/p/original' + dataMovie['results'][0]['poster_path'];
        return {
            poster: poster
        }
    });
}