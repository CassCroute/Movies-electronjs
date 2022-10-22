import { app, BrowserWindow, ipcMain } from 'electron';

if(require('electron-squirrel-startup')) app.quit();

const ipc = ipcMain;

import fs from 'fs'; // used for caching

import path from 'path';

import cp from 'child_process';

import { ElectronBlocker } from '@cliqz/adblocker-electron';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

var handleSquirrelEvent = function() {
  if (process.platform != 'win32') {
     return false;
  }

  function executeSquirrelCommand(args: any, done: any) {
     var updateDotExe = path.resolve(path.dirname(process.execPath), 
        '..', 'update.exe');
     var child = cp.spawn(updateDotExe, args, { detached: true });

     child.on('close', function(code) {
        done();
     });
  };

  function install(done: any) {
     var target = path.basename(process.execPath);
     executeSquirrelCommand(["--createShortcut", target], done);
  };

  function uninstall(done: any) {
     var target = path.basename(process.execPath);
     executeSquirrelCommand(["--removeShortcut", target], done);
  };

  var squirrelEvent = process.argv[1];

  switch (squirrelEvent) {

     case '--squirrel-install':
        install(app.quit);
        return true;

     case '--squirrel-updated':
        install(app.quit);
        return true;

     case '--squirrel-obsolete':
        app.quit();
        return true;

     case '--squirrel-uninstall':
        uninstall(app.quit);
        return true;
  }

  return false;
};

if (handleSquirrelEvent()) {
  app.quit();
}

async function createWindow() {
    const win = new BrowserWindow({
        width: 220,
        height: 270,
        icon: path.resolve(__dirname, '../IMG/CassCroute.ico'),
        frame: false,
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false
        }
  });
  
  if (process.platform == 'darwin') {
    win.setWindowButtonVisibility(false);
  }

  const blocker = ElectronBlocker.parse(fs.readFileSync(path.resolve(__dirname, '../DATA/easylist.txt'), 'utf-8')); 

  blocker.enableBlockingInSession(win.webContents.session);

  blocker.on('request-blocked', (request) => {
    console.log('blocked', request.tabId, request.url);
  });

  blocker.on('request-redirected', (request) => {
    console.log('redirected', request.tabId, request.url);
  });

  blocker.on('request-whitelisted', (request) => {
    console.log('whitelisted', request.tabId, request.url);
  });

  blocker.on('csp-injected', (request) => {
    console.log('csp', request.url);
  });

  blocker.on('script-injected', (script: string, url: string) => {
    console.log('script', script.length, url);
  });

  blocker.on('style-injected', (style: string, url: string) => {
    console.log('style', style.length, url);
  });

  win.setBackgroundColor('#202020')

  win.loadFile('loading.html')
  win.setResizable(false)

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

  ipc.on('titreCouverture', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm1', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm2', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm3', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm4', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm5', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm6', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm7', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm8', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm9', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm10', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm11', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm12', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm13', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm14', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm15', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm16', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm17', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm18', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm19', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreFilm20', function (event: any, arg: any) {
    var idVideo = arg['idVideo']
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}})
  })

  ipc.on('titreApp', ()=> {
    app.quit();
    app.relaunch();
  })

  ipc.on('infoMedia1', function (event: any, arg: any) {
    var idVideo = arg['idVideo'];
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}});
  });

  ipc.on('infoMedia2', function (event: any, arg: any) {
    var idVideo = arg['idVideo'];
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}});
  });

  ipc.on('infoMedia3', function (event: any, arg: any) {
    var idVideo = arg['idVideo'];
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}});
  });

  ipc.on('infoMedia4', function (event: any, arg: any) {
    var idVideo = arg['idVideo'];
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}});
  });

  ipc.on('infoMedia5', function (event: any, arg: any) {
    var idVideo = arg['idVideo'];
    win.loadFile('3-LECTEUR/index.html', {query: {"id": idVideo}});
  });

};

app.whenReady().then(() => {
    createWindow();
});