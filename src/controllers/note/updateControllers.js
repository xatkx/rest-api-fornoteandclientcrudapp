import notaModel from "../../models/notaModel.js";


export const putOneNote = async (request, response, next) => {

    const { id } = request.params
    try {
        await notaModel.findOneAndUpdate({_id: id}, request.body)
        response.json({isok: true})        
    } catch (error) {
        console.log(error)
        response.json({isok: false})
        next()
    }
}