const express =require("express")
const app=express()
app.use(express.json())

const FamilyRouter=require("./Routes/FamilyRoute")
app.use('/families',FamilyRouter)


module.exports=app