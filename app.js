const express =require("express")
const app=express()
app.use(express.json())




const FamilyRouter=require("./Routes/FamilyRoute")
const UsersRouter=require("./Routes/UsersRoute")
const AuthRouter=require("./Routes/authRoute")
const InformationsRouter=require("./Routes/InformationsRoute")
app.use('/families',FamilyRouter)
app.use('/users',UsersRouter)
app.use('/informations',InformationsRouter)
app.use('/auth',AuthRouter)


module.exports=app