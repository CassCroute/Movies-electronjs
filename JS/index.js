const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron')
const ipc = ipcMain

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

  setTimeout(() => launchIndex(), 6000)

  function launchIndex() {
    win.loadFile('index.html')
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
}

app.whenReady().then(() => {
  createWindow()
})
