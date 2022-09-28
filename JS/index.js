const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron')
const ipc = ipcMain

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1080,
    height: 607.5,
    icon: './IMG/CassCroute.ico',
    frame: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('./index.html')

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
