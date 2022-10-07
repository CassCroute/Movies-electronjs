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

                getMoviePosterAccueil(titreOriginalFilm, titreFilm).then(function(returndata) {
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

function getMoviePosterAccueil(titreOriginalFilm, titreFilm){
    return $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + titreOriginalFilm + '&language=fr-FR').then(function(dataMovie){
        var indice = 0;
        if(dataMovie['results'][0]['media_type'] == 'person' || titreFilm == 'Aladdin disney' || titreFilm == 'Hulk') indice = 1;
        if(titreFilm == 'Vendredi 13 (2009)') indice = 2;
        var poster = 'https://image.tmdb.org/t/p/original' + dataMovie['results'][indice]['poster_path'];
        return {
            poster: poster
        }
    });
}