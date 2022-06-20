import express from 'express'
import { getPost, getpostbyId, createPost, deletePost, updatePost } from '../controller/postController.js'

const route = express.Router()

route.get('/', getPost)
route.get('/:id', getpostbyId)
route.post('/', createPost)
route.delete('/:id', deletePost)
route.put('/:id', updatePost)


export default route