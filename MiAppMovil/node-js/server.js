const express = require('express');
const passport = require('passport')
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
/**
 * Importar las rutas
 */
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extendd: true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
app.disable('x-powered-by'); //Diable the x-powered-by header in the response

app.set('port',port);
/**
 * Llamado las rutas
 */
userRoutes(app);
//Iniciando el servidor
// direccion ip v4 de la maquina consultar ipconfig
server.listen(3000,'192.168.137.171'|| 'localhost',
function(){
    console.log('Aplicacion no NodeJs'+ process.pid + 'ejecutando en' + server.address().address + ':' + server.address().port);
});

app.get('/test', (req, res) =>{
    res.send('Estas en la Ruta raiz de Backend');
});
//Manejo de errores
//Error handler
app.use((err, req, res, next)=>{
    console.log(err)
    res.status(err.status || 500).send(err.stack);
});