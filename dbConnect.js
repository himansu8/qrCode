
import mongoose from "mongoose"
import 'dotenv/config' 

const {MONGODB_URI} = process.env

async function dbConnect(){
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("DB connect successfully")
    } catch (error) {
        console.log(error)
    }
}

dbConnect()