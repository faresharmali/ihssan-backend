const express =require("express")
const app=express()
app.use(express.json())




const FamilyRouter=require("./Routes/FamilyRoute")
const UsersRouter=require("./Routes/UsersRoute")
const InformationsRouter=require("./Routes/InformationsRoute")
app.use('/families',FamilyRouter)
app.use('/users',UsersRouter)
app.use('/informations',InformationsRouter)


module.exports=app