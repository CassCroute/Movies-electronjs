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

const minimizeButton = document.getElementById("minimize-btn");
const maxUnmaxButton = document.getElementById("maximize-btn");
const closeButton = document.getElementById("close-btn");
const iconMax = document.getElementById('icons-btn-max');

minimizeButton.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})

maxUnmaxButton.addEventListener('click', ()=>{
    ipc.send('maximizeRestoreApp')
})

function changeMaxResBtn(isMaximizedApp){
    if(isMaximizedApp){
        iconMax.classList.remove("fa-window-maximize");
        iconMax.classList.add("fa-window-restore");
        maxUnmaxButton.title = 'Restaurer'
    } else {
        iconMax.classList.add("fa-window-maximize");
        iconMax.classList.remove("fa-window-restore");
        maxUnmaxButton.title = 'Maximiser'
    }
}

ipc.on('isMaximized', ()=>{ changeMaxResBtn(true) })
ipc.on('isRestored', ()=>{ changeMaxResBtn(false) })

closeButton.addEventListener('click', ()=>{
    ipc.send('closeApp')
})

const pageDeGarde = document.getElementById('Film');
const titreFilm1 = document.getElementById('titreFilm1');
const titreFilm2 = document.getElementById('titreFilm2');
const titreFilm3 = document.getElementById('titreFilm3');
const titreFilm4 = document.getElementById('titreFilm4');
const titreFilm5 = document.getElementById('titreFilm5');
const titreFilm6 = document.getElementById('titreFilm6');
const titreFilm7 = document.getElementById('titreFilm7');
const titreFilm8 = document.getElementById('titreFilm8');
const titreFilm9 = document.getElementById('titreFilm9');
const titreFilm10 = document.getElementById('titreFilm10');
const titreFilm11 = document.getElementById('titreFilm11');
const titreFilm12 = document.getElementById('titreFilm12');
const titreFilm13 = document.getElementById('titreFilm13');     
const titreFilm14 = document.getElementById('titreFilm14');
const titreFilm15 = document.getElementById('titreFilm15');
const titreFilm16 = document.getElementById('titreFilm16');
const titreFilm17 = document.getElementById('titreFilm17');
const titreFilm18 = document.getElementById('titreFilm18');
const titreFilm19 = document.getElementById('titreFilm19');
const titreFilm20 = document.getElementById('titreFilm20');
var temp = [];
if (titreFilm1 !== null) {

    pageDeGarde.addEventListener('click', ()=>{
        var idVideo = pageDeGarde.getAttribute('class');
        ipc.send('titreCouverture', { idVideo: idVideo} );
    })

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    
    async function changeInfoMovies(idVideo) {
        var pathAPIcc = path.join(userDataPath, 'dataAPICassCroute.json');
        fs.readFile( pathAPIcc, 'utf8', function (err,dataAPIcc) {
            var dataAPIcc = JSON.parse(dataAPIcc);
            temp = dataAPIcc[idVideo];
            dataAPIcc[idVideo] = dataAPIcc[0];
            dataAPIcc[0] = temp;
            fs.writeFileSync(pathAPIcc, JSON.stringify(dataAPIcc));
        });
        await delay(100);
        var pathAPImdb = path.join(userDataPath, 'dataAPIDBMovie.json');
        fs.readFile( pathAPImdb, 'utf8', function (err,dataDBMovie) {
            var dataAPImdb = JSON.parse(dataDBMovie);
            temp = dataAPImdb[idVideo];
            dataAPImdb[idVideo] = dataAPImdb[0];
            dataAPImdb[0] = temp;
            fs.writeFileSync(pathAPImdb, JSON.stringify(dataAPImdb));
        });
        await delay(100);
    }

    titreFilm1.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(1);
        await delay(100);
        InitAccueil();
    })

    titreFilm2.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(2);
        await delay(100);
        InitAccueil();
    })

    titreFilm3.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(3);
        await delay(100);
        InitAccueil();
    })

    titreFilm4.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(4);
        await delay(100);
        InitAccueil();
    })

    titreFilm5.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(5);
        await delay(100);
        InitAccueil();
    })

    titreFilm6.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(6);
        await delay(100);
        InitAccueil();
    })

    titreFilm7.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(7);
        await delay(100);
        InitAccueil();
    })

    titreFilm8.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(8);
        await delay(100);
        InitAccueil();
    })

    titreFilm9.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(9);
        await delay(100);
        InitAccueil();
    })

    titreFilm10.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(10);
        await delay(100);
        InitAccueil();
    })

    titreFilm11.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(11);
        await delay(100);
        InitAccueil();
    })

    titreFilm12.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(12);
        await delay(100);
        InitAccueil();
    })

    titreFilm13.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(13);
        await delay(100);
        InitAccueil();
    })

    titreFilm14.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(14);
        await delay(100);
        InitAccueil();
    })

    titreFilm15.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(15);
        await delay(100);
        InitAccueil();
    })

    titreFilm16.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(16);
        await delay(100);
        InitAccueil();
    })

    titreFilm17.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(17);
        await delay(100);
        InitAccueil();
    })

    titreFilm18.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(18);
        await delay(100);
        InitAccueil();
    })

    titreFilm19.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(19);
        await delay(100);
        InitAccueil();
    })

    titreFilm20.addEventListener('click', async ()=>{
        $('body,html').animate({scrollTop: 0}, 500); 
        changeInfoMovies(20);
        await delay(100);
        InitAccueil();
    })

    $(window).on( "load", InitAccueil() );

    function InitAccueil() {
        var pathAPIcc = path.join(userDataPath, 'dataAPICassCroute.json');
        fs.readFile( pathAPIcc, 'utf8', function (err,data) {
            var dataAPIcc = JSON.parse(data);
            var titreFilm = dataAPIcc[0]['title'];
            var titreFilmOriginal = dataAPIcc[0]['originalTitle'];
            var dateSortie = dataAPIcc[0]['dateSortie'];
            var id = dataAPIcc[0]['id'];
            var currentClass = $('#Film').attr('class');
            $('#Film').removeClass(currentClass).addClass(id.toString());
            var pathAPImdb = path.join(userDataPath, 'dataAPIDBMovie.json');
            fs.readFile( pathAPImdb, 'utf8', function (err,dataDBMovie) {
                var dataAPImdb = JSON.parse(dataDBMovie);
   
                $('#titreVideoEnCours').html(titreFilm);
                $('#descriptionEnCours').html(dataAPImdb[0]['overview']);
    
                var lengthCategory = dataAPImdb[0]['genre_ids'].length;
    
                for ( var i = 1; i <= 3; i++ ) 
                {
                    if (i <= lengthCategory) {
                        categorie = dataAPImdb[0]['genre_ids'][i - 1];
                        var categoryFilm = categorieFilm[categorie];
                        $('.key-' + i).html(categoryFilm);
                    } else {
                        $('.key-3').hide();
                    }
                    
                }
    
                var img = 'https://image.tmdb.org/t/p/original' + dataAPImdb[0]['backdrop_path'];
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
                $('#BA').attr("onclick", `videoBA("${titreFilmOriginal}", "${dateSortie}")`);
                getImageLightness(imgObj.src);
                var i = 0;
                var intervalId = setInterval(function () {
                    if ( i >= 1 && i <= 20)
                    {
                        titreFilmOriginal = dataAPIcc[i]['originalTitle'];
                        titreFilm = dataAPIcc[i]['title'];
                        lienFilm = dataAPIcc[i]['link'];
                        dateSortie = dataAPIcc[i]['dateSortie'];
                        id = dataAPIcc[i]['id'];

                        var img = 'https://image.tmdb.org/t/p/original' + dataAPImdb[0]['poster_path'];

                        var child = dataAPImdb[i];

                        if (child !== null) {
                            var img = 'https://image.tmdb.org/t/p/original' + dataAPImdb[i]['poster_path'];
                        } 

                        var imgObj = new Image();
                        imgObj.crossOrigin = "Anonymous";
                        imgObj.src = img + "?not-from-cache-please-stp";
                        
                        $('#titreFilm' + i).css('background', 'linear-gradient(179.98deg, rgba(0, 0, 0, 0) 45.59%, rgba(20, 20, 20, 0.8) 73.96%), url(' + imgObj.src + ') no-repeat center center');
                        $('#titreFilm' + i).css('-webkit-background-size', 'cover');
                        $('#titreFilm' + i).css('-moz-background-size', 'cover');
                        $('#titreFilm' + i).css('-o-background-size', 'cover');
                        $('#titreFilm' + i).css('background-size', 'cover');
                        $('#titreFilm' + i + ' h3').html(titreFilm);
                    }
                    if ( i == 21 ) clearInterval(intervalId);
                    i++;
                },150);
            });
        });
    }
    function videoBA(film, dateSortie) {
        modal.style.display = "block";
        $.getJSON('https://api.themoviedb.org/3/search/multi?api_key=' + API_KEY + '&primary_release_year=' + dateSortie + '&query=' + film + '&language=fr-FR', function(dataBA) {
            var idDBM = dataBA['results'][0]['id'];
            $.getJSON(`https://api.themoviedb.org/3/movie/${idDBM}/videos?api_key=${API_KEY}&include_video_language=fr-FR`, function(dataTrailer) {
                if (dataTrailer['result'] !== null) {
                    var urlTrailer = `https://www.youtube.com/embed/${dataTrailer['results'][0]['key']}?autoplay=1&controls=0`;
                    $('.videoBA').replaceWith('<object data="' + urlTrailer + '" class="videoBA"></object>');
                } else {
                    modal.style.display = "none";
                }
            });
        });
    }

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
                    $('.group-name p').css("color", "white");
                    $('.btn').css("color", "white");
                    $('.title h1').css("color", "white");
              } else {
                    $('.group-name p').css("color", "black");
                    $('.btn').css("color", "black");
                    $('.title h1').css("color", "black");
              }
        }
    }
}

const titreApp = document.getElementById('titreApp')

if (titreApp !== null) {
    titreApp.addEventListener('click', ()=>{
        ipc.send('titreApp')
    })
}

document.getElementById('txt-search').onkeyup = function() {
    var waitsearch = setInterval(function() { 
        var infoMedia1 = document.getElementById('infoMedia0')
        var infoMedia2 = document.getElementById('infoMedia1')
        var infoMedia3 = document.getElementById('infoMedia2')
        var infoMedia4 = document.getElementById('infoMedia3')
        var infoMedia5 = document.getElementById('infoMedia4')

        infoMedia1.addEventListener('click', ()=>{
            var idVideo = infoMedia1.getAttribute('class').split(' ')[1]
            ipc.send('infoMedia1', { idVideo: idVideo} )
        })

        infoMedia2.addEventListener('click', ()=>{
            var idVideo = infoMedia2.getAttribute('class').split(' ')[1]
            ipc.send('infoMedia2', { idVideo: idVideo} )
        })

        infoMedia3.addEventListener('click', ()=>{
            var idVideo = infoMedia3.getAttribute('class').split(' ')[1]
            ipc.send('infoMedia3', { idVideo: idVideo} )
        })

        infoMedia4.addEventListener('click', ()=>{
            var idVideo = infoMedia4.getAttribute('class').split(' ')[1]
            ipc.send('infoMedia4', { idVideo: idVideo} )
        })

        infoMedia5.addEventListener('click', ()=>{
            var idVideo = infoMedia5.getAttribute('class').split(' ')[1]
            ipc.send('infoMedia5', { idVideo: idVideo} )
        })
        clearInterval(waitsearch);
    }, 500);
}
