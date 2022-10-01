# CassCrouteApp   
    
![CassCroutApp](https://github.com/CassCroute/En-attendant/blob/main/IMG/CassCrouteApp.png)    
    
installer la denière version de nodejs ici : [node.js](https://nodejs.org/fr/)    
    
~ $ git clone git@github.com:CassCroute/En-attendant.git //récupérer les sources     
~ $ cd CassCroute //se rendre dans le dossier de l'application    
CassCroute $ npm i --save-dev //pour installer les dépendances    
CassCroute $ npm run start //pour lancer l'app avec electron (sans installation)      
   
installer Wix Tools Set et l'extension pour votre version de Visual Studio (2019 ou 2022), plus d'info : [tuto installation de Wix Tools Set](https://ourcodeworld.com/articles/read/927/how-to-create-a-msi-installer-in-windows-for-an-electron-framework-application)    
    
CassCroute $ npm run build  //pour build l'application avant création de l'installateur    
CassCroute $ npm run setup  //pour créer un setup msi windows afin de partager l'application    