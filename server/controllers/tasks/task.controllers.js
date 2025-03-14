const tasksModel = require("../../models/tasks/tasks.model")
const addNewTaskDescription = async (req, res) => {
  try{
    const addNewTask = new tasksModel({
     taskDescription:req.body.taskDescription,
     startDate:req.body.startDate,
     endDate:req.body.endDate
    })
    await addNewTask.save()
    res.status(200).json({message:"Task description added successfully"})
  }catch(error){
    res.status(400).json({message:error.message})
  }
}
const getAllTaskDescription = async (req, res) => {
  try{
    let get_taskDesc = await tasksModel.find()
    res.json({tasks:get_taskDesc})
  }catch(error){
    res.status(400).json({message:error.message})
  }
}
const updateTaskDescription = async (req, res) => {
  try{
    let _id = req.params.id
    let updateBody = req.body
    let options = {new:true}
    await tasksModel.findByIdAndUpdate(_id, updateBody, options)
    res.status(200).json({message:"Task updated successfully"})
  }catch(error){
    res.status(400).json({message:error.message})
  }
}
const deleteTaskDescriptionById = async (req, res) => {
  try{
    let _id = req.params.id
    await tasksModel.findByIdAndDelete(_id)
    res.status(200).json({message:"Task deletedsuccessfully"})
  }catch(error){
    res.status(400).json({message:error.message})
  }
}
module.exports = {
 addNewTaskDescription,
 getAllTaskDescription,
 updateTaskDescription,
 deleteTaskDescriptionById
}