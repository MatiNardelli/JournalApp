const express = require('express');
const Evento = require('../models/Evento');


const getEventos = async(req,res=express.response) => {

    //populate para llenar datos de usuarios (referencia: user)
    const eventos = await Evento.find().populate('user','name');
    
    res.status(201).json({
        ok: true,
        eventos
    })
};
const crearEvento = async (req,res=express.response) => {

    //verificar que tenga el evneto
    const evento = new Evento(req.body);

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.json({
            ok:true,
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        });
    }

    // res.status(201).json({
    //     ok: true,
    //     msg: 'crearEventos',
    // })
};
const actualizarEvento = async (req,res=express.response) => {
    const eventoId = req.params.id;
    const uid = req.uid

    try {
        const evento = await Evento.findById(eventoId);
        if(!evento){
            //404: algun elemento no existe
            return res.status(404).json({
                ok:false,
                msg:'Evendo no existe para ese id'
            });
        };

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:'Error. No se puede editar este evento'
            });
        };

        const nuevoEvento = {
            ...req.body,
            user: uid
        };

        //new:true me permite ver los ultimos cambio en la res
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId,nuevoEvento,{new:true});

        res.json({
            ok:true,
            evento: eventoActualizado
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    }

    // res.status(201).json({
    //     ok:true,
    //     eventoId
    // })
};
const eliminarEvento = async(req,res=express.response) => {

    const eventoId = req.params.id;
    const uid = req.uid

    try {
        const evento = await Evento.findById(eventoId);
        if(!evento){
            //404: algun elemento no existe
            return res.status(404).json({
                ok:false,
                msg:'Evendo no existe para ese id'
            });
        };

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:'Error. No se puede eliminar este evento'
            });
        };

        //new:true me permite ver los ultimos cambio en la res
        const eventoEliminado = await Evento.findByIdAndDelete(eventoId);

        res.json({
            ok:true,
            evento: eventoEliminado
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    };


    // res.status(201).json({
    //     ok: true,
    //     msg: 'eliminarEventos',
    //     id: res.id
    // })
};



module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}