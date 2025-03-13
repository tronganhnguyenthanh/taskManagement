const mongoose = require("mongoose")
const ProjectTask = new mongoose.Schema({
  projectName:{
   type:String
  },
  shortDescription:{
   type:String
  },
},{
 collection:"projects"
})
module.exports = mongoose.model("ProjectTask", ProjectTask)