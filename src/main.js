const electron      = require('electron')
const app           = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', _ => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/../build/main.html`)
})

app.on('window-all-closed', _ => app.quit())
