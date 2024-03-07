import mongoose from 'mongoose'
import { apis } from '../config/api'


export const connect = () => {

    mongoose.connect(apis.db,{ useNewUrlParser: true,})

}