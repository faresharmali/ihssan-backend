
exports.AddFamily=(req,res)=>{
    res.send("AddFamily")
}
exports.GetAllFamilies=(req,res)=>{
    res.send("All Families")
}
exports.GetFamily=(req,res)=>{
    res.send(req.params.id)
}
exports.DeleteFamily=(req,res)=>{
    res.send("DeleteFamily")
}
exports.UpdateFamily=(req,res)=>{

    res.send("UpdateFamily")
}