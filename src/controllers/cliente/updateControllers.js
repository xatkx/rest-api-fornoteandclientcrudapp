import clientModel from '../../models/clientModel.js'

export const updateOneClient = async (request, response, next) => {

    const { id } = request.params;
    try {
        await clientModel.findOneAndUpdate({_id: id}, request.body)
        response.json({isok: true})
    } catch(err)
    {
        response.json({isok:false,id,body:request.body,error:err})
        next()
    }
}