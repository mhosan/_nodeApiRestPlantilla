const mongoose = require ('mongoose');

// mongoose.connect('mongodb://localhost/datos')
//     .then(()=>{
//         console.log('Conexión a la db ok');
//     })
//     .catch(err => console.error(err));

var mongodbUri = 'mongodb://mh:1990ostruca@ds231070.mlab.com:31070/datos';
mongoose.connect(mongodbUri, (err, res)=>{
    if(err){ 
            console.log('Error de conexión: ', err);
        } else {
            console.log('Conexión a la BD exitosa!!!');
        }
   });

module.exports = mongoose;
//module.exports = mongoDB;






