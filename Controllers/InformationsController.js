
exports.AddInformation=(req,res)=>{
    res.send("AddFamily")
}
exports.GetAllInformation=(req,res)=>{
    res.send("All informations")
}
exports.GetInformation=(req,res)=>{
    res.send(req.params.id)
}
exports.DeleteInformation=(req,res)=>{
    res.send("DeleteFamily")
}
exports.UpdateInformation=(req,res)=>{

    res.send("UpdateFamily")
}