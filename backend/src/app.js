import express from "express";
import cors from "cors";
import cookieParser  from "cookie-parser";

const app = express()

app.use(cors({
    origin:process.env.FRONTEND_URI,
    credentials:true 
}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser()) 
app.use(express.json({limit:"16kb"}))

import userRoute from "./routes/user.route.js"//import routes

//routes declearition
app.use("/api/v1/user",userRoute)


export {app}