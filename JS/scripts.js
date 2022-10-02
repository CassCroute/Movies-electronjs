const { data } = require("jquery");

var API_KEY = '7173b5f46e24129d10872840ca78f916';
var film = [
      {
            "id" : "1",
            "Titre" : "Vendredi 13",
            "TitreOriginal" : "Friday the 13th",
            "Lien" : "https://uqload.org/embed-xkqywv19p2m2.html"
      }, 
      {
            "id" : "2",
            "Titre" : "Pacific Rim : Uprising",
            "TitreOriginal" : "Pacific Rim : Uprising",
            "Lien" : "https://uqload.org/embed-3w9vrevwu3y9.html",
      },
      {
            "id" : "3",
            "Titre" : "A star is born",
            "TitreOriginal" : "A star is born",
            "Lien" : "https://uqload.org/embed-7qm2fq16z5hd.html",
      },
      {
            "id" : "4",
            "Titre" : "Terminator",
            "TitreOriginal" : "The Terminator",
            "Lien" : "https://uqload.org/embed-4uk6w7gn8hwr.html",
      },
      {
            "id" : "5",
            "Titre" : "Terminator 2",
            "TitreOriginal" : "Terminator 2",
            "Lien" : "https://uqload.org/embed-zk5qbviyhfpo.html",
      },      {
            "id" : "6",
            "Titre" : "Terminator 3",
            "TitreOriginal" : "Terminator 3",
            "Lien" : "https://uqload.org/embed-hwkyb6t39whm.html",
      },      {
            "id" : "7",
            "Titre" : "Terminator 4",
            "TitreOriginal" : "Terminator 4",
            "Lien" : "https://uqload.org/embed-6f63g0tlxa3u.html",
      },      {
            "id" : "8",
            "Titre" : "Terminator 5",
            "TitreOriginal" : "Terminator Genisys",
            "Lien" : "https://uqload.org/embed-qia7xmdlaoqq.html",
      },      {
            "id" : "9",
            "Titre" : "Terminator 6",
            "TitreOriginal" : "Terminator 6",
            "Lien" : "https://uqload.org/embed-0zfy2wx50eny.html",
      },
      {
            "id" : "10",
            "Titre" : "Toy Story 1",
            "TitreOriginal" : "Toy Story",
            "Lien" : "https://uqload.com/embed-6q35y5hkbqno.html"
      },
      {
            "id" : "11",
            "Titre" : "Toy Story 2",
            "TitreOriginal" : "Toy Story 2",
            "Lien" : "https://uqload.com/embed-lcx1g8ck7twt.html"
      },
      {
            "id" : "12",
            "Titre" : "Toy Story 3",
            "TitreOriginal" : "Toy Story 3",
            "Lien" : "https://uqload.com/embed-w0kg39g52cnv.html"
      },
      {
            "id" : "13",
            "Titre" : "Toy Story 4",
            "TitreOriginal" : "Toy Story 4",
            "Lien" : "https://uqload.com/embed-m5ojnuecxzd4.html"
      },
      {
            "id" : "14",
            "Titre" : "Star Wars : Episode I : La Menace fantôme",
            "TitreOriginal" : "Star Wars: Episode I – The Phantom Menace",
            "Lien" : "https://uqload.org/embed-gv85blttit0v.html"
      },
      {
            "id" : "15",
            "Titre" : "Star Wars : Episode II : L&#39;Attaque des clones",
            "TitreOriginal" : "Star Wars: Episode II – Attack of the Clones",
            "Lien" : "https://uqload.com/embed-sxlgywn4c4v2.html"
      },
      {
            "id" : "16",
            "Titre" : "Star Wars : Episode III : La Revanche des Sith",
            "TitreOriginal" : "Star Wars: Episode III – Revenge of the Sith",
            "Lien" : "https://uqload.org/embed-0ljktzhh690z.html"
      },
      {
            "id" : "17",
            "Titre" : "Star Wars : Episode IV : Un nouvel espoir (La Guerre des étoiles)",
            "TitreOriginal" : "Star Wars: Episode IV – A New Hope",
            "Lien" : "https://uqload.org/embed-ktddysf9gwew.html"
      },
      {
            "id" : "18",
            "Titre" : "Star Wars : Episode V : L&#39;empire contre attaque",
            "TitreOriginal" : "Star Wars : Episode V – The Empire Strikes Back",
            "Lien" : "https://uqload.com/embed-zskmddcj83nw.html"
      },
      {
            "id" : "19",
            "Titre" : "Star Wars : Episode VI : Le Retour du Jedi",
            "TitreOriginal" : "Star Wars: Episode VI – Return of the Jedi",
            "Lien" : "https://uqload.org/embed-evpygcm7kbmb.html"
      },
      {
            "id" : "20",
            "Titre" : "Star Wars : Episode VII : Le Réveil de la Force",
            "TitreOriginal" : "Star Wars: Episode VII – The Force Awakens",
            "Lien" : "https://uqload.org/embed-gy87vyby414z.html"
      },
      {
            "id" : "21",
            "Titre" : "Star Wars : épisode VIII : Les Derniers Jedi",
            "TitreOriginal" : "Star Wars: Episode VIII – The Last Jedi",
            "Lien" : "https://uqload.org/embed-vsmgq262kdbu.html"
      },
      {
            "id" : "22",
            "Titre" : "Star Wars : Episode IX : L&#39;Ascension de Skywalker",
            "TitreOriginal" : "Star Wars: Episode IX – The Rise of Skywalker",
            "Lien" : "https://uqload.org/embed-pn22t5pntxe5.html"
      },
      {
            "id" : "23",
            "Titre" : "La Marie du Port de 1950",
            "TitreOriginal" : "La Marie du Port",
            "Lien" : "https://www.youtube.com/embed/Wc_MfiOehnc"
      },
      {
            "id" : "24",
            "Titre" : "Le Tonnerre De Dieu",
            "TitreOriginal" : "Le Tonnerre De Dieu",
            "Lien" : "https://archive.org/details/JeanGabinLeTonnerreDeDieuFilmEntier360p"
      }
];

function poster(film, count) {
      $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + film + '&language=fr-FR', function(data) {
            var indice = 0;
            if(data['results'][0]['media_type'] == 'person') indice = 1;      
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
      $.post('http://127.0.0.1:5050/search', { name: searchField }, function( data ) {
            for (var i = 0; i < data['result'].length; i++) {
                  var titreOriginalFilm = data['result'][i]['originalTitle'];
                  var titreFilm = data['result'][i]['title'];
                  var lienFilm = data['result'][i]['link'];
                  output += '<div class="col-md-6 well">';
                  output +=`<a class="infoMedia" onclick='MAJlienvideo("${lienFilm}","${titreOriginalFilm}","${titreFilm}")'>`; 
                  output += '<br><div ><img class="img-responsive" id="' + i + '" src="" alt="'+ titreFilm +'" height="55px" /></div>';
                  output += '<div class="titreDescription">';
                  output += '<h5>' + titreFilm + '</h5>';
                  output += '</div>';
                  output += '</a>';
                  output += '</div>';
                  poster(titreOriginalFilm, i)
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

function MAJlienvideo(movieEmbed, film, titrefr) {
      $("#filecontainer").attr("src",movieEmbed);

      $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + film + '&language=fr-FR', function(data) {
            var indice = 0;
            if(data['results'][0]['media_type'] == 'person') indice = 1;
            var img = 'https://image.tmdb.org/t/p/original' + data['results'][indice]['backdrop_path'];
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

var idLaunchMovie = Math.floor(Math.random() * (22 - 1 + 1) + 1);

$(window).on( "load", InitVideo(idLaunchMovie) );


function InitVideo(idMovie) {
      $.get('http://127.0.0.1:5050/getRandom', function( data ) {
            var titreOriginalFilm = data['result']['originalTitle'];
            var titreFilm = data['result']['title'];
            var lienFilm = data['result']['link'];
            $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&query=' + titreOriginalFilm + '&language=fr-FR', function(data) {
                  $("#filecontainer").attr("src",lienFilm);
                  var indice = 0;
                  if(data['results'][0]['media_type'] == 'person') indice = 1;
                  var img = 'https://image.tmdb.org/t/p/original' + data['results'][indice]['backdrop_path'];
                  var imgObj = new Image();
                  imgObj.crossOrigin = "Anonymous";
                  imgObj.src = img + "?not-from-cache-please";
                  $('#titreVideoEnCours').html(titreFilm);
                  $('#descriptionEnCours').html(data['results'][indice]['overview']);
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