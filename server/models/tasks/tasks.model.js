const mongoose = require("mongoose")
const TaskModel = new mongoose.Schema({
 taskDescription:{
  type:String
 },
 startDate:{
  type:Date
 },
 endDate:{
  type:Date
 }
},{
 collection:"tasks"
})
module.exports = mongoose.model("TaskModel", TaskModel)