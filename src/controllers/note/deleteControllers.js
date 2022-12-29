import notaModel from "../../models/notaModel.js";

export const deleteOneNota = async (request, response, next) => {
    const { id } = request.params
    try {
        await notaModel.deleteOne({_id: id})
        response.json({isok: true})
    } catch (error) {
        console.log(error)
        response.json({isok:false})
        next()
    }
}