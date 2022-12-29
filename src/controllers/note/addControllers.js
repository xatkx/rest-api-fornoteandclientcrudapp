import notaModel from '../../models/notaModel.js'


export const addOneNote = async (request, response, next) => {
    
    try {
        await (new notaModel(request.body)).save()
        response.json({ isok: true})
    } catch (error) {
        console.log(error)
        response.json({isok: false})
        next()
    }
}