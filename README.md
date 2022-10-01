# CassCrouteApp   
    
![CassCroutApp](https://github.com/CassCroute/Movies-electronjs/blob/main/IMG/CassCrouteApp.png)    
    
installer la denière version de nodejs ici : [node.js](https://nodejs.org/fr/)    
installer Wix Tools Set et l'extension pour votre version de Visual Studio (2019 ou 2022), plus d'info : [tuto installation de Wix Tools Set](https://ourcodeworld.com/articles/read/927/how-to-create-a-msi-installer-in-windows-for-an-electron-framework-application)    
    
```     
~ $ git clone git@github.com:CassCroute/Movies-electronjs.git //récupérer les sources     
~ $ cd Movies-electronjs //se rendre dans le dossier de l'application    
Movies-electronjs $ npm i --save-dev //pour installer les dépendances    
Movies-electronjs $ npm uninstall exe-icon-extractor //sous macOS dépence propre à windows   
Movies-electronjs $ npm run start //pour lancer l'app avec electron (sans installation)         
Movies-electronjs $ npm run build  //pour build l'application avant création de l'installateur    
Movies-electronjs $ npm run setup  //pour créer un setup msi windows afin de partager l'application    
```    