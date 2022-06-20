import data_model from "../models/data_model.js"


export const getPost = async (req, res)=>{
    try {
        const data = await data_model.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getpostbyId = async(req, res)=>{
    try {
        const data = await data_model.findById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}


export const createPost = async (req, res) =>{
    const post = new data_model({
        text:req.body.text
    })
    try {
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deletePost = async(req, res)=>{
    const post = req.params
    try {
        await data_model.findByIdAndDelete(post.id)
        res.status(202)
    } catch (error) {
        res.status(409)
    }
}


export const updatePost = async(req, res)=>{
    try {
        await data_model.findByIdAndUpdate(req.params.id, req.body)
        res.status(202).json(req.body)
    } catch (error) {
        res.json({error: error.message})
    }
}
