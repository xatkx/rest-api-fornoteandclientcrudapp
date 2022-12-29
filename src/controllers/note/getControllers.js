
import notaModel from '../../models/notaModel.js'


export const getAllNote = async (request, response, next) => {

    try {
        const datos = await notaModel.find({})
        response.json(datos)

    } catch(err)
    {
        console.log(err)
        next()
    }
}

export const getOneNote = async (request, respose, next) => {

    const { id } = request.params
    
    try {
        const date = await notaModel.findOne({_id: id})
        respose.json(date);
    } catch (error) {
        console.log(error)
        next()
    }
}