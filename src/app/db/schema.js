import mongoose from 'mongoose'

const Schema = mongoose.Schema


const dbSchema = new Schema({
    message: {
        type: Schema.Types.String,
        trim: true,
        index: true
    }
}, { timestamps: true })

const dbModal = mongoose.models.assignment_schema || mongoose.model("assignment_schema", dbSchema)

module.exports = dbModal