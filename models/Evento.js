const {Schema,model} = require('mongoose');

//defino mi modelo
const EventoSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {//primer linea dice a Type que va ser una ref y seg el tipo
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:true
    }
});

//es solo un cambio visual 
EventoSchema.method('toJSON',  function(){
    const {__v,_id,...object} = this.toObject();
    object.id=_id;
    return object;
})

module.exports = model('Evento', EventoSchema)