const { app, BrowserWindow, session } = require('electron')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1080,
    height: 607.5,
    icon: './IMG/CassCroute.ico',
    autoHideMenuBar: true,
  })

  win.loadFile('./index.html')
}

app.whenReady().then(() => {
  createWindow()
})

