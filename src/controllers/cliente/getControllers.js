
import clientModel from '../../models/clientModel.js'



export const getAllClient = async (request, response, next) => {
    try {
        const all = await clientModel.find({})
        response.json(all)
    } catch (error) {
        response.json({isok:false})
        next()
    }
}