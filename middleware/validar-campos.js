
const express = require('express');
const { validationResult } = require('express-validator');


const validarCampos = (req,res=express.response,next) => {
    //next: llamo a c/middleware si todo se ejecuta correctamente    

    //manejo de errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }; 
    
    next();
};

module.exports = {
    validarCampos
}