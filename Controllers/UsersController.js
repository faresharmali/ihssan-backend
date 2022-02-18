
exports.AddUser=(req,res)=>{
    res.send("AddFamily")
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