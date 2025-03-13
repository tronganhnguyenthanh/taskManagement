const projectsModel = require("../../models/projects/projects.model")
const addNewProject = async (req, res) => {
  try{
    let new_project = new projectsModel({
     projectName:req.body.projectName,
     shortDescription:req.body.shortDescription
    })
    await new_project.save()
    res.status(200).json({message:"Project added successfully"}) 
  }catch(error){
    res.status(400).json({message:error.message}) 
  }
}
const getAllProjects = async (req, res) => {
  try{
    let project_list = await projectsModel.find()
    res.json({projects:project_list})
  }catch(error){
    res.status(400).json({message:error.message}) 
  }
}
const getProjectById = async (req, res) => {
  try{
    let _id = req.params.id
    let projectId = await projectsModel.findById(_id)
    res.status(200).json(projectId)
  }catch(error){
    res.status(400).json({message:error.message})
  }
}
const updateProject = async (req, res) => {
  try{
    let _id = req.params.id
    let updateBody = req.body
    let options = {new:true}
    await projectsModel.findByIdAndUpdate(_id, updateBody, options)
    res.status(200).json({message:"Project updated successfully"})
  }catch(error){
    res.status(400).json({message:error.message})
  }
}
const deleteProject = async (req, res) => {
  try{
    let _id = req.params.id
    await projectsModel.findByIdAndDelete(_id)
    res.status(200).json({message:"Project deleted successfully"})
  }catch(error){
    res.status(400).json({message:error.message})
 }
}
module.exports = {
 addNewProject,
 getAllProjects,
 getProjectById,
 updateProject,
 deleteProject
}