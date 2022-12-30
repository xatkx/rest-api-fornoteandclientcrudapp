import clienteModel from '../../models/clientModel.js'


export const deleteOneCliente = async (request, response, next) => {
    const { id } = request.params
    try {
        await clienteModel.findOneAndDelete({_id: id})
        response.json({isok: true})
    } catch (error) {
        response.json({isok:true})
        next()
    }
}