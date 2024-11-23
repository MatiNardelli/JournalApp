const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');
// res=express.response -> esto es para tener el tipado que de otra forma lo pierdo


const crearUsuario = async(req,res=express.response) => {


    const {name,email,password} = req.body;

    try {
        let usuario = await Usuario.findOne({email});
        
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'La direccion de correo es incorrecta',
            })
        }
        
        usuario = new Usuario(req.body);

        //encryp password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt);

        // trabaja como una promesa
        await usuario.save();

        //es una promesa y tengo que esperar
        const token = await generarJWT(usuario.id,usuario.name);
        
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Porfa, hable con el admin'
        });
    };
};

const loginUsuario = async(req,res=express.response) => {
    const {email,password} = req.body;

    try {
        const usuario = await Usuario.findOne({email});
        //const porque aca no la renombro
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'La direccion de correo es incorrecta',
            })
        };

        //confirmar el password
        const validPassword = bcrypt.compareSync(password,usuario.password);

        if (!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valida',
            });
        }

        //generar JWT
        const token = await generarJWT(usuario.id,usuario.name);

        console.log(token);
        
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token:token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Porfa, hable con el admin'
        });
    };

};

const revalidarToken = async(req,res=express.response) => {

    const token = await generarJWT(req.uid,req.name);

    res.json({
        ok: true,
        token: token,
    })
};


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}