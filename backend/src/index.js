// import mongoose from "mongoose";
// import { DB_NAME } from "./constents.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()

.then(()=>{
    app.listen(process.env.port || 8000,()=>{
        console.log(`server is running on PORT:${process.env.port}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed!...",error)
})

// import express from "express";
// const app = express()

// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.Mongodb_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("err",error);
//         throw error
//        })
//        app.listen(process.env.port,()=>{
//         console.log(`server is running on PORT${process.env.port}`);
//         })
    
//     } catch (error) {
//         console.error("Error:",error)
//         throw err
//     }
// })()