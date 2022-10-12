const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron')
const ipc = ipcMain

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 220,
    height: 220,
    icon: path.resolve(__dirname, '../IMG/CassCroute.ico'),
    frame: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.setBackgroundColor('#202020')

  win.loadFile('loading.html')
  win.setResizable(false)

  //setTimeout(() => launchIndex(), 10000)

  ipc.on('loaded', ()=>{
    launchIndex()
  })

  function launchIndex() {
    win.loadFile('1-ACCUEIL/index.html')
    win.setResizable(true)
    win.setContentSize(1080, 608)
    win.setMinimumSize(1080, 608)
    win.center()
  }

  win.webContents.send('isMaximized')

  ipc.on('minimizeApp', ()=>{
    win.minimize()
  })

  ipc.on('maximizeRestoreApp', ()=>{
    if (win.isMaximized()) {
      win.restore()
    } else {
      win.maximize()
    }
  })

  win.on('maximize', ()=>{
    win.webContents.send('isMaximized')
  })
  
  win.on('unmaximize', ()=>{
    win.webContents.send('isRestored')
  })
  
  ipc.on('closeApp', ()=>{
    win.close()
  })

  ipc.on('titreCouverture', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm1', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm2', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm3', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm4', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm5', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm6', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm7', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm8', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm9', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm10', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm11', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm12', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm13', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm14', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm15', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm16', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm17', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm18', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm19', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm20', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreApp', ()=> {
    app.quit();
    app.relaunch();
  })

  ipc.on('infoMedia1', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('infoMedia2', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('infoMedia3', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('infoMedia4', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('infoMedia5', function (event, arg) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })
}

app.whenReady().then(() => {
  createWindow()
})
