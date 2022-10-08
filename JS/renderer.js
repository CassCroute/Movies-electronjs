const { ipcRenderer } = require('electron')
const ipc = ipcRenderer


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
        console.log('is maximized')
        iconMax.classList.remove("fa-window-maximize");
        iconMax.classList.add("fa-window-restore");
        maxUnmaxButton.title = 'Restaurer'
    } else {
        console.log('is restored')
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

const pageDeGarde = document.getElementById('pageDeGarde');
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
if (titreFilm1 !== null) {

    pageDeGarde.addEventListener('click', ()=>{
        var idVideo = pageDeGarde.getAttribute('class').split(' ')[1]
        ipc.send('titreCouverture', { idVideo: idVideo} )
    })

    titreFilm1.addEventListener('click', ()=>{
        var idVideo = titreFilm1.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm1', { idVideo: idVideo} )
    })

    titreFilm2.addEventListener('click', ()=>{
        var idVideo = titreFilm2.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm2', { idVideo: idVideo} )
    })

    titreFilm3.addEventListener('click', ()=>{
        var idVideo = titreFilm3.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm3', { idVideo: idVideo} )
    })

    titreFilm4.addEventListener('click', ()=>{
        var idVideo = titreFilm4.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm4', { idVideo: idVideo} )
    })

    titreFilm5.addEventListener('click', ()=>{
        var idVideo = titreFilm5.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm5', { idVideo: idVideo} )
    })

    titreFilm6.addEventListener('click', ()=>{
        var idVideo = titreFilm6.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm6', { idVideo: idVideo} )
    })

    titreFilm7.addEventListener('click', ()=>{
        var idVideo = titreFilm7.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm7', { idVideo: idVideo} )
    })

    titreFilm8.addEventListener('click', ()=>{
        var idVideo = titreFilm8.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm8', { idVideo: idVideo} )
    })

    titreFilm9.addEventListener('click', ()=>{
        var idVideo = titreFilm9.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm9', { idVideo: idVideo} )
    })

    titreFilm10.addEventListener('click', ()=>{
        var idVideo = titreFilm10.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm10', { idVideo: idVideo} )
    })

    titreFilm11.addEventListener('click', ()=>{
        var idVideo = titreFilm11.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm11', { idVideo: idVideo} )
    })

    titreFilm12.addEventListener('click', ()=>{
        var idVideo = titreFilm12.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm12', { idVideo: idVideo} )
    })

    titreFilm13.addEventListener('click', ()=>{
        var idVideo = titreFilm13.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm13', { idVideo: idVideo} )
    })

    titreFilm14.addEventListener('click', ()=>{
        var idVideo = titreFilm14.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm14', { idVideo: idVideo} )
    })

    titreFilm15.addEventListener('click', ()=>{
        var idVideo = titreFilm15.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm15', { idVideo: idVideo} )
    })

    titreFilm16.addEventListener('click', ()=>{
        var idVideo = titreFilm16.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm16', { idVideo: idVideo} )
    })

    titreFilm17.addEventListener('click', ()=>{
        var idVideo = titreFilm17.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm17', { idVideo: idVideo} )
    })

    titreFilm18.addEventListener('click', ()=>{
        var idVideo = titreFilm18.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm18', { idVideo: idVideo} )
    })

    titreFilm19.addEventListener('click', ()=>{
        var idVideo = titreFilm19.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm19', { idVideo: idVideo} )
    })

    titreFilm20.addEventListener('click', ()=>{
        var idVideo = titreFilm20.getAttribute('class').split(' ')[1]
        ipc.send('titreFilm20', { idVideo: idVideo} )
    })
}

const titreApp = document.getElementById('titreApp')

if (titreApp !== null) {
    titreApp.addEventListener('click', ()=>{
        ipc.send('titreApp')
    })
}

const infoMedia1 = document.getElementById('infoMedia0')
const infoMedia2 = document.getElementById('infoMedia1')
const infoMedia3 = document.getElementById('infoMedia2')
const infoMedia4 = document.getElementById('infoMedia3')
const infoMedia5 = document.getElementById('infoMedia4')

function infoMedia(idVideo) {  
    ipc.send('infoMedia', { idVideo: idVideo} )
}

if (infoMedia1 != null) {
    infoMedia1.addEventListener('click', ()=>{
        var idVideo = infoMedia1.getAttribute('class').split(' ')[1]
        ipc.send('infoMedia1', { idVideo: idVideo} )
    })
}

if (infoMedia2 != null) {
    infoMedia2.addEventListener('click', ()=>{
        var idVideo = infoMedia2.getAttribute('class').split(' ')[1]
        ipc.send('infoMedia2', { idVideo: idVideo} )
    })
}

if (infoMedia3 != null) {
    infoMedia3.addEventListener('click', ()=>{
        var idVideo = infoMedia3.getAttribute('class').split(' ')[1]
        ipc.send('infoMedia3', { idVideo: idVideo} )
    })
}

if (infoMedia4 != null) {
    infoMedia4.addEventListener('click', ()=>{
        var idVideo = infoMedia4.getAttribute('class').split(' ')[1]
        ipc.send('infoMedia4', { idVideo: idVideo} )
    })
}

if (infoMedia5 != null) {
    infoMedia5.addEventListener('click', ()=>{
        var idVideo = infoMedia5.getAttribute('class').split(' ')[1]
        ipc.send('infoMedia5', { idVideo: idVideo} )
    })
}