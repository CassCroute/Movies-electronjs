const apiAdresse = 'https://cc-movies-api.herokuapp.com/';
var API_KEY = '7173b5f46e24129d10872840ca78f916';

const categorieFilm = {
      "28":	"Action",
      "12":	"Aventure",
      "16":	"Animation",
      "35":	"Comedie",
      "80":	"Polar",
      "99":	"Documentaire",
      "18":	"Drame",
      "10751": "Famille",
      "14":	"Fantastique",
      "36":	"Histoire",
      "27":	"Horreur",
      "10402": "Musique",
      "9648": "Mystère",
      "10749": "Romance",
      "878": "Science-Fiction",
      "10770": "Téléfilm",
      "53": "Thriller",
      "10752": "Guerre",
      "37": "Western"           
}

const categorieSerie = {
      "10759": "Action et Aventure",
      "16": "Animation",
      "35": "Comédie",
      "80": "Polar",
      "99": "Documentaire",
      "18": "Drame",
      "10751": "Famille",
      "10762": "Jeunesse",
      "9648": "Mystère",
      "10763": "Actualités",
      "10764": "Réalité",
      "10765": "Sci-Fi et Fantastique",
      "10766": "Soap",
      "10767": "Talk Show",
      "10768": "Guerre et Politique",
      "37": "Western"     
}

function getMovieInfo(titreOriginalFilm, titreFilm, lienFilm, dateSortie){
    return $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&primary_release_year=' + dateSortie + '&query=' + titreOriginalFilm + '&language=fr-FR').then(function(dataMovie){
        var poster = 'https://image.tmdb.org/t/p/original' + dataMovie['results'][0]['poster_path'];
        return {
            poster: poster
        }
    });
}

function poster(film, titreFilm, dateSortie, count) {
    $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&primary_release_year=' + dateSortie + '&query=' + film + '&language=fr-FR', function(data) {
          var img = 'https://image.tmdb.org/t/p/original' + data['results'][0]['poster_path'];
          id='#' + count;
          $(id).attr('src',img);
    });
}

$('#txt-search').keyup(function(){
    var searchField = $(this).val();
    searchField = searchField.replace("'","&#39;");
    if(searchField === '')  {
        $('#filter-records').html('');
        $('#filter-records').css('border', '');
        return;
    }
    var output = '<div class="row">';
    $.post(apiAdresse + 'search', { name: searchField }, function( data ) {
          for (var i = 0; i < data['result'].length; i++) {
                var titreOriginalFilm = data['result'][i]['originalTitle'];
                var titreFilm = data['result'][i]['title'];
                var idVideo = data['result'][i]['id'];
                var dateSortie = data['result'][i]['dateSortie'];
                output += '<div class="col-md-6 well">';
                output += `<div class="infoMedia ${idVideo}" id="infoMedia${i}")'>`; 
                output += `<br><div ><img class="img-responsive" id="${i}" src="" alt="${titreFilm}" height="55px" /></div>`;
                output += '<div class="titreDescription">';
                output += '<h5>' + titreFilm + '</h5>';
                output += '</div>';
                output += '</div>';
                output += '</div>';
                poster(titreOriginalFilm, titreFilm, dateSortie, i)
                if(i%2 != 0){
                  output += '</div><div class="row">'
                }
          }
          output += '</div><div class="row">'
          output += '</div>';
          $('#filter-records').html(output);
          $('#filter-records').css('border', '2px solid black');
          $('#filter-records').css('color', 'white')
    });
});

$(document).on( "click", 'body', function() {
    $('#filter-records').html("");
    $('#filter-records').css('border', '');
    $('.form-control').val("");
});