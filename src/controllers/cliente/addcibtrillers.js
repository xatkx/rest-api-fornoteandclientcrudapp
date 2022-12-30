import clientModel from "../../models/clientModel.js";


export const addOneClient = async (request, response, next) => {
    const newClient = new clientModel(request.body)
    try {
        await newClient.save()
        response.json({isok:true})
    } catch (error) {
        response.json({isok:false})
        next()
    }
}