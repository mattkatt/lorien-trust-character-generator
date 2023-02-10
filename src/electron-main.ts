import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        x: 50,
        y: 50,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            preload: './electron-preload.js',
        },
    });

    win.setMenu(null);

    ipcMain.on('window-minimize', () => win.minimize());
    ipcMain.on('window-maximize', () => win.maximize());
    ipcMain.on('window-restore', () => win.restore());
    ipcMain.on('window-close', () => win.close());

    win.on('maximize', () => win.webContents.send('maximize'));
    win.on('unmaximize', () => win.webContents.send('unmaximize'));

    if (isDev) {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools({ mode: 'detach' });
    } else {
        win.loadFile('index.html');
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => (process.platform !== 'darwin' ? app.quit() : null));
app.on('activate', () => (BrowserWindow.getAllWindows().length === 0 ? createWindow() : null));
