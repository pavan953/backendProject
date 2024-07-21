import mongoose from "mongoose";
import { DB_NAME  } from "../constents.js";


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.Mongodb_URI}/${DB_NAME}`);
        console.log(`MongoDB connected!... DB host: ${connectionInstance.connection.host}`); 
    } catch (error) {
        console.log("MongoDB connection error",error);
        process.exit(1)
    }
}

export default connectDB