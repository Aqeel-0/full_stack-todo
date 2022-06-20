import mongoose from "mongoose"

const db_schema = new mongoose.Schema({
    text: {type: String, require:true},
    completed: { type: Boolean, default: false}
})

const data_model = mongoose.model('data_model', db_schema)

export default data_model