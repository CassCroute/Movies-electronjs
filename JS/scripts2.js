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

/**$(window).on( "load", InitAccueil() );

function InitAccueil() {
    $.post(apiAdresse + 'getRandomNumber', { number: 21 }, function( data ) {
        var titreOriginalFilm = data['result'][0]['originalTitle'];
        var titreFilm = data['result'][0]['title'];
        var lienFilm = data['result'][0]['link'];
        var id = data['result'][0]['id'];
        $('.title').addClass(id.toString());
        $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + titreOriginalFilm + '&language=fr-FR', function(dataDBMovie) {
            var indice = 0;
            if(dataDBMovie['results'][0]['media_type'] == 'person' || titreFilm == 'Aladdin disney' || titreFilm == 'Hulk') indice = 1;
            if(titreFilm == 'Vendredi 13 (2009)') indice = 2;

            $('#titreVideoEnCours').html(titreFilm);
            $('#descriptionEnCours').html(dataDBMovie['results'][indice]['overview']);

            var lengthCategory = dataDBMovie['results'][indice]['genre_ids'].length;

            for ( var i = 1; i <= 3; i++ ) 
            {
                if (i <= lengthCategory) {
                    categorie = dataDBMovie['results'][indice]['genre_ids'][i - 1];
                    var categoryFilm = categorieFilm[categorie];
                    $('.key-' + i).html(categoryFilm);
                } else {
                    $('.key-3').hide();
                }
                
            }

            var img = 'https://image.tmdb.org/t/p/original' + dataDBMovie['results'][indice]['backdrop_path'];
            var imgObj = new Image();
            imgObj.crossOrigin = "Anonymous";
            imgObj.src = img + "?not-from-cache-please";
            $('.title h1').html(titreFilm);
            $('#pageCentre').css('background', 'linear-gradient(180.01deg, rgba(0, 0, 0, 0) 10.36%, #0F0E17 95.26%), linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 2, 2, 0.16) 100%), url(' + imgObj.src + ') no-repeat center center fixed')
            $('#pageCentre').css('filter', 'blur(2px)');
            $('#pageCentre').css('-webkit-background-size', 'cover');
            $('#pageCentre').css('-moz-background-size', 'cover');
            $('#pageCentre').css('-o-background-size', 'cover');
            $('#pageCentre').css('background-size', 'cover');
            $('body').css('background-color', '');
            getImageLightness(imgObj.src);
        });
        var i = -1;
        var intervalId = setInterval(function () {
            if ( i >= 0 )
            {
                titreOriginalFilm = data['result'][i+1]['originalTitle'];
                titreFilm = data['result'][i+1]['title'];
                lienFilm = data['result'][i+1]['link'];
                id = data['result'][i+1]['id'];

                getMovieInfo(titreOriginalFilm, titreFilm, lienFilm).then(function(returndata) {
                    var img = returndata['poster'];
                    var imgObj = new Image();
                    imgObj.crossOrigin = "Anonymous";
                    imgObj.src = img + "?not-from-cache-please-stp";
                    $('#titreFilm' + i).css('background', 'linear-gradient(179.98deg, rgba(0, 0, 0, 0) 45.59%, rgba(20, 20, 20, 0.8) 73.96%), url(' + imgObj.src + ') no-repeat center center');
                    $('#titreFilm' + i).css('-webkit-background-size', 'cover');
                    $('#titreFilm' + i).css('-moz-background-size', 'cover');
                    $('#titreFilm' + i).css('-o-background-size', 'cover');
                    $('#titreFilm' + i).css('background-size', 'cover');
                    $('#titreFilm' + i + ' h3').html(titreFilm);
                    $('#titreFilm' + i).addClass(id.toString());
                });
            }
            if ( i == 19 ) clearInterval(intervalId);
            i++;
        },400);
    });
}**/

function getMovieInfo(titreOriginalFilm, titreFilm, lienFilm){
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

function poster(film, titreFilm, count) {
    $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + film + '&language=fr-FR', function(data) {
          var indice = 0;
          if(data['results'][0]['media_type'] == 'person' || titreFilm == 'Aladdin disney' || titreFilm == 'Hulk') indice = 1;      
          if(titreFilm == 'Vendredi 13 (2009)') indice = 2;
          var img = 'https://image.tmdb.org/t/p/original' + data['results'][indice]['poster_path'];
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
                output += '<div class="col-md-6 well">';
                output += `<div class="infoMedia ${idVideo}" id="infoMedia${i}")'>`; 
                output += '<br><div ><img class="img-responsive" id="' + i + '" src="" alt="'+ titreFilm +'" height="55px" /></div>';
                output += '<div class="titreDescription">';
                output += '<h5>' + titreFilm + '</h5>';
                output += '</div>';
                output += '</div>';
                output += '</div>';
                poster(titreOriginalFilm, titreFilm, i)
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

/**function getImageLightness(imageSrc) {
    var img = document.createElement("img");
    img.src = imageSrc + '?' + new Date().getTime();
    img.setAttribute('crossOrigin', '');
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;

    img.onload = function() {
          // create canvas
          var canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
    
          var ctx = canvas.getContext("2d");
          ctx.drawImage(this,0,0);
    
          var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
          var data = imageData.data;
          var r,g,b,avg;

          for(var x = 0, len = data.length; x < len; x+=4) {
                r = data[x];
                g = data[x+1];
                b = data[x+2];
                avg = Math.floor((r+g+b)/3);
                colorSum += avg;
          }
          var brightness = Math.floor(colorSum / (this.width*this.height));
          if (brightness < 110) {
                $('.group-name p').css("color", "white");
                $('.btn').css("color", "white");
                $('.title h1').css("color", "white");
          } else {
                $('.group-name p').css("color", "black");
                $('.btn').css("color", "black");
                $('.title h1').css("color", "black");
          }
    }
}**/

$(document).on( "click", 'body', function() {
    $('#filter-records').html("");
    $('#filter-records').css('border', '');
    $('.form-control').val("");
});