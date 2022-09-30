// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve(__dirname, '../dist/casscroute-win32-x64');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, '../dist/windows_installer');

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: 'Logiciel pour voir des films.',
    exe: 'casscroute',
    name: 'CassCroute',
    config: {
        loadingGif: path.resolve(__dirname, '../IMG/CassCroute.gif'),
        setupIcon: path.resolve(__dirname, '../IMG/CassCroute.ico'),
        shortName: 'CassCroute',
        shortcutFolderName: 'CassCroute',
        shortcutName: 'CassCroute',
        appUserModelId: 'com.squirrel.casscroute.exe',
        upgradeCode: '976abc71-3d26-4599-a367-8b6f150297ca',
        language: '1036',
    },
    manufacturer: 'CassCroute Team',
    version: '0.2.0',
    arch : 'x64',
    packagerConfig: {
        icon: path.resolve(__dirname, '../IMG/CassCroute.ico')
    },

    // Configure installer User Interface
    ui: {
        chooseDirectory: true,
        images: {
            exclamationIcon: path.resolve(__dirname, '../IMG/CassCroute32.ico'),
            infoIcon: path.resolve(__dirname, '../IMG/CassCroute32.ico'),
            newIcon: path.resolve(__dirname, '../IMG/CassCroute16.ico'),
            upIcon: path.resolve(__dirname, '../IMG/CassCroute16.ico'),
            background: path.resolve(__dirname, '../IMG/background.bmp'),
            banner: path.resolve(__dirname, '../IMG/banner.bmp')
        }
    },
});

// 4. Create a .wxs template file
msiCreator.create().then(function(){

    // Step 5: Compile the template to a .msi file
    msiCreator.compile();
});