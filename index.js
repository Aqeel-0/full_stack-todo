import mongoose from "mongoose"
import  express  from "express"
import cors from 'cors'
import PostRoutes from './Routes/posts.js'

// importing the database schema
import data_model from './models/data_model.js'



const LINK = "mongodb+srv://aqeel007:e2SgtUjhMyzf5HDP@sandbox.lsh0mhi.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())

const connect_database = async()=>{
    try{
        await mongoose.connect(LINK)
        app.listen(PORT, ()=>{
            console.log('connected to database, server up and running...')
        })
    }catch(error){
        console.log(error)
    }
}

connect_database()

app.use('/posts', PostRoutes)







