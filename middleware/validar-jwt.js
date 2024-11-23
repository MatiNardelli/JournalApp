
const express = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req,res=express.response,next) => {
    //X-token headers
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'Token no existe'
        });
    };

    try {
        // {uid,name} = payload
        const {uid,name} =jwt.verify(
            token,
            process.env.SECRET_JWT_SEED,
        );

        req.uid=uid;
        req.name=name;

        
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg:'Token no válido',
        })
    }
    
    //si todo es correcto q llame lo q sigue
    next();
}


module.exports = validarJWT