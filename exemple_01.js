/*
node example
 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res)  {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from node\n');
});

server.listen(port, hostname, function(){
    console.log("Server running at http://"+hostname+":"+port+"/");
});


/*
 L'exécution, dans la console, de la commande node exemple_01.js démarre le serveur. Une
 fois le serveur démarré, il attend les requêtes HTTP en provenance d'un client. Le navigateur
 web va envoyer ces requêtes au serveur.
 */