const express = require('express');         //web server
const morgan = require('morgan');           //para ver mensajes en el servidor
const cors = require('cors');               //proxy
const app = express();
const { mongoose } = require('./database'); //driver para mongodb, ahi se establece la conexión al mongo (cerrar?)

app.set('port', process.env.PORT || 3000);  //usar el puerto que me asigne el serv hosting
                                            //si el puerto no existe, utilizar el 3000

//midlewares
app.use(morgan('dev'));     //ver los mensajes en el servidor
app.use(express.json());    //que el servidor entienda json
//app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors({}));

//routes
app.use('/',require('./routes/rutas.js'));  //el primer parametro es la ruta
                                            //por default. Se agrega a la ruta '/'

//start el server
app.listen(app.get('port'), () => {
    console.log("Server escuchando en el puerto", app.get('port'));
    
});