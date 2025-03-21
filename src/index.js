const {app, BrowserWindow} = require('electron');
const path = require('path');
const { ipcMain } = require('electron');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    resizable: true,
    // Add the icon here in the existing createWindow function
    icon: path.join(__dirname, '../assets/icon' + (process.platform === 'win32' ? '.ico' : process.platform === 'darwin' ? '.icns' : '.png')),
    webPreferences: { 
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setAspectRatio(5 / 6);

  // Open the DevTools
  ipcMain.on('minimize-window', () => {
    mainWindow.minimize();
  });
  
  ipcMain.on('close-window', () => {
    if(mainWindow){ 
      mainWindow.destroy(); 
      app.quit(); 
    }
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Remove this second BrowserWindow creation - it's causing the error
// const mainWindow = new BrowserWindow({...});