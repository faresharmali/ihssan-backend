
const User= require('../Models/UserModel')


exports.AddUser=(req,res)=>{
   User.create({
    identifier: "352",
    name: "1321332",
    birthdate: "String",
    schoolLevel: "String",
    health: "String",
    gender: "String",
   }).then(()=>{
       console.log("user created")
       res.sendStatus(200)

   }).catch((e)=>{
       console.log(e)
       res.sendStatus(404)
   })
}
exports.GetAllUsers=(req,res)=>{
    res.send("All users")
}
exports.GetUser=(req,res)=>{
    res.send(req.params.id)
}
exports.DeleteUser=(req,res)=>{
    res.send("DeleteFamily")
}
exports.UpdateUser=(req,res)=>{

    res.send("UpdateFamily")
}