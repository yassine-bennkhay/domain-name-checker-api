const express=require("express")
const app=express()
const PORT=8080
app.use("/",require("./routes/apiRoute"))
app.listen(PORT,()=>console.log(`Server is Running on the Port ${PORT}`))