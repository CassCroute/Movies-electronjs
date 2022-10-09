$.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + titreOriginalFilm + '&language=fr-FR', function(data) {
    var indice = 0;
    if(data['results'][0]['media_type'] == 'person' || titreFilm == 'Aladdin disney' || titreFilm == 'Hulk') indice = 1;
    if(titreFilm == 'Vendredi 13 (2009)') indice = 2;
    $.getJSON(`https://api.themoviedb.org/3/movie/${data['results'][indice]['id']}/videos?api_key=${API_KEY}`), function(dataVideo) {
        var urlTrailer = `https://www.youtube.com/watch?v=${dataVideo['results'][0]['key']}`;
    }
})