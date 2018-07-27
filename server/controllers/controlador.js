const usuarioModelo = require('../models/usuarios');
const usuariosControlador = {};

//get
usuariosControlador.getUsuarios = async (req, res) => {
    const usuarios = await usuarioModelo.find();
    res.json(usuarios);
}

//get con id
usuariosControlador.getUsuario = async (req, res) =>{
    const usuario = await usuarioModelo.findById(req.params.id);
    res.json({
        usuario
    });
};

//post
usuariosControlador.createUsuario = async (req, res) => {
    const usuario = new usuarioModelo({
        _id: req.body.id,
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        edad : req.body.edad,
        usuario : req.body.usuario
    });
    await usuario.save();
    res.json({
        'status' : 'Usuario guardado'
    });
}

//put
usuariosControlador.editUsuario = async (req, res) =>{
    const { id } = req.params;
    const usuario = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        edad : req.body.edad,
        usuario : req.body.usuario
    };
    await usuarioModelo.findByIdAndUpdate(id, {$set: usuario},{new: true});
    res.json({status: 'Usuario actualizado'});
};

//delete
usuariosControlador.deleteUsuario = async (req, res) =>{
    await usuarioModelo.findByIdAndRemove(req.params.id);
    res.json({status : 'Usuario borrado'});
};


module.exports = usuariosControlador;
