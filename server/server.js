import express from "express"
import dotenv from "dotenv"
import path from "path"


const __dirname= path.resolve()
const app = express()
dotenv.config()

const PORT = process.env.PORT

if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/client/dist")))

    app.get("*splat",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
    })
}

app.listen(PORT,()=>{
    console.log("server is running on PORT:" ,PORT)
})