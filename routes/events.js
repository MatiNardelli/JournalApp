
//todas tienen que pasar por la validacion del JWT
const express = require('express');
const {check} = require('express-validator');

const {validarCampos} = require('../middleware/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const validarJWT = require('../middleware/validar-jwt');
const isDate = require('../helpers/isDate');
const router = express.Router();

//Todas tienen que pasar por validacion JWT y en vez de poner una por una el middlewere, hago lo siguiente. Aplica desde esta linea hacia abajo. Si paso getEvento arriba, esa sera publica y el resto necesita wl JWT
router.use(validarJWT);

//obtener eventos
router.get('/',getEventos);
//crear eventos
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de final es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);
// //actualizar eventos
router.put('/:id',actualizarEvento);
// //borrar evento eventos
router.delete('/:id',eliminarEvento);


module.exports = router;