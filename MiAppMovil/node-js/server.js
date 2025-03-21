const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
/**
 * Importar las rutas
 */
const users = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extendd: true}));
app.use(cors());
app.disable('x-powered-by');


app.set('port',port);
/**
 * Llamado las rutas
 */
users(app);
// direccion ip v4 de la maquina consultar ipconfig
server.listen(3000,'192.168.1.47'|| 'localhost',
function(){
    console.log('Aplicacion no NodeJs'+ process.
    pid + 'inicio puerto' + port);

})

app.get('/', (req, res) =>{
    res.send('Ruta raiz de Backend');
});
//Error handler
app.use((err, req, res, next)=>{
    console.log(err)
    res.status(err.status || 500).send(err.stack);
});