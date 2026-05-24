const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('envInfo', {
    platform: process.platform
});
