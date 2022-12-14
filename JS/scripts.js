const apiAdresse = 'https://cc-movies-api.herokuapp.com/';
var API_KEY = '7173b5f46e24129d10872840ca78f916';

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
                  var lienFilm = data['result'][i]['link'];
                  var dateSortie = data['result'][i]['dateSortie'];
                  output += '<div class="col-md-6 well">';
                  output +=`<a class="infoMedia" onclick='MAJlienvideo("${lienFilm}","${titreOriginalFilm}","${titreFilm}", "${dateSortie}")'>`; 
                  output += '<br><div ><img class="img-responsive" id="' + i + '" src="" alt="'+ titreFilm +'" height="55px" /></div>';
                  output += '<div class="titreDescription">';
                  output += '<h5>' + titreFilm + '</h5>';
                  output += '</div>';
                  output += '</a>';
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

function MAJlienvideo(movieEmbed, film, titrefr, dateSortie) {
      $("#filecontainer").attr("src",movieEmbed);

      $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&primary_release_year=' + dateSortie + '&query=' + film + '&language=fr-FR', function(data) {
            var img = 'https://image.tmdb.org/t/p/original' + data['results'][0]['backdrop_path'];
            $('#pageCentre').css('background','url(' + img + ') no-repeat center center fixed'); 
            $('#pageCentre').css('-webkit-background-size', 'cover');
            $('#pageCentre').css('-moz-background-size', 'cover');
            $('#pageCentre').css('-o-background-size', 'cover');
            $('#pageCentre').css('background-size', 'cover');
            $('#titreVideoEnCours').html(titrefr);
            $('#descriptionEnCours').html(data['results'][indice]['overview']);
            $('#descriptionEnCours').css('color', 'white')
            var imgObj = new Image();
            imgObj.src = img + '?' + new Date().getTime();
            imgObj.setAttribute('crossOrigin', '');
            getImageLightness(imgObj.src);
      });
  }

  displayWindowSize();
  window.addEventListener("resize", displayWindowSize);

function displayWindowSize() {
      var w = 0.6 * document.documentElement.clientWidth;
      var h = 0.3375 * document.documentElement.clientWidth;

      $('#filecontainer').attr('width',w);
      $('#filecontainer').attr('height',h);
}

$(document).on( "click", '#pageCentre', function() {
      $('#filter-records').html("");
      $('#filter-records').css('border', '');
      $('.form-control').val("");
});

function getImageLightness(imageSrc) {
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
                  $('.titleClass').css("color", "white");
                  $('.btn').css("color", "white");
            } else {
                  $('.titleClass').css("color", "black");
                  $('.btn').css("color", "black");
            }
      }
}

$(window).on( "load", InitVideo() );


function InitVideo() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const idVideo = urlParams.get('id');
      $.post(apiAdresse + 'getById', { id: idVideo }, function( data ) {
            var titreOriginalFilm = data['result']['originalTitle'];
            var titreFilm = data['result']['title'];
            var lienFilm = data['result']['link'];
            var dateSortie = data['result']['dateSortie'];
            $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&primary_release_year=' + dateSortie + '&query=' + titreOriginalFilm + '&language=fr-FR', function(data) {
                  $("#filecontainer").attr("src",lienFilm);
                  var img = 'https://image.tmdb.org/t/p/original' + data['results'][0]['backdrop_path'];
                  var imgObj = new Image();
                  imgObj.crossOrigin = "Anonymous";
                  imgObj.src = img + "?not-from-cache-please";
                  $('#titreVideoEnCours').html(titreFilm);
                  $('#descriptionEnCours').html(data['results'][0]['overview']);
                  $('#descriptionEnCours').css('color', 'white')
                  $('#pageCentre').css('background','url(' + imgObj.src + ') no-repeat center center fixed')
                  $('#pageCentre').css('-webkit-background-size', 'cover');
                  $('#pageCentre').css('-moz-background-size', 'cover');
                  $('#pageCentre').css('-o-background-size', 'cover');
                  $('#pageCentre').css('background-size', 'cover');
                  $('body').css('background-color', '');
                  getImageLightness(imgObj.src);
            });
      });
}