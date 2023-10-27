
const { response, request } = require('express');


const Usuario = require('../models/usuario');

//http://localhost:8080/api0/usuarios?q=hola&nombre=Francisco&apikey=123
const UsuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query;

    res.json({

        ok: true,
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })

}

const UsuariosPost = async (req, res = response) => {

    const body = req.body;
    const usuario = new Usuario(body);
    await usuario.save();

    res.json({
        msg: 'post API - Controlador',
        usuario
    });


}

const UsuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put API - Controlador',
        id
    });
}

const UsuariosPatch = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'patch API - Controlador',

    });
}

const UsuariosDelete = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'delete API - Controlador',

    });
}

module.exports = {
    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete,
}