const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron')
const ipc = ipcMain

const createWindow = () => {
  const win = new BrowserWindow({
    width: 220,
    height: 220,
    icon: './IMG/CassCroute.ico',
    frame: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('loading.html')

  setTimeout(() => launchIndex(), 6000)

  function launchIndex() {
    win.loadFile('index.html')
    win.setContentSize(1080, 608)
  }


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
}

app.whenReady().then(() => {
  createWindow()
})
