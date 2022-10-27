$.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&primary_release_year=' + dateSortie + '&query=' + titreOriginalFilm + '&language=fr-FR', function(data) {
    $.getJSON(`https://api.themoviedb.org/3/movie/${data['results'][0]['id']}/videos?api_key=${API_KEY}`), function(dataVideo) {
        var urlTrailer = `https://www.youtube.com/watch?v=${dataVideo['results'][0]['key']}`;
    }
})