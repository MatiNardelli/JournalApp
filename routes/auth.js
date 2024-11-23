/*
    Rutas de usuarios / auth
    host + /api/auth
*/

//dos formas distintas mismo resultado
const express = require('express');
const {check} = require('express-validator');

const { crearUsuario,loginUsuario,revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');
const validarJWT = require('../middleware/validar-jwt');

const router = express.Router();
// const {Router} = require('express');
// const router = Router();

// middleware que controla un campo a la vez    




router.post(
    '/new',
    [ //middlewares
        check('name','el nombre es obligatorio').not().isEmpty(),
        check('email','el mail es obligatorio').isEmail(),
        check('password','el password debe ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ], 
    crearUsuario);
router.post(
    '/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','La contraseña debe tener 6 caracteres').isLength({min:6}),
        validarCampos
    ], 
    loginUsuario
);
router.get(
    '/renew',
    [
        validarJWT,
    ],
    revalidarToken
);


module.exports = router;