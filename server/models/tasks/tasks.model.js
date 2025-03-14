const mongoose = require("mongoose")
const TaskModel = new mongoose.Schema({
 taskDescription:{
  type:String
 },
 startDate:{
  type:String
 },
 endDate:{
  type:String
 }
},{
 collection:"tasks"
})
module.exports = mongoose.model("TaskModel", TaskModel)