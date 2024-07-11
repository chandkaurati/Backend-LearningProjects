const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 8000

;( async function (){
   try {
    const responce = mongoose.connect("mongodb+srv://chand:mypass123@cluster0.frdz08r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    if(responce) console.log("datbase connects on " + mongoose.connection)
   } catch (error) {
     console.log(error)
   }
})()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`app is listning on port ${PORT}`)
    })
})

app.get("/", (req, res)=>{
    res.send('express')
})

