const express = require("express")
const projectsController = require("../../controllers/projects/projects.controllers")
const projectRouter = express.Router()
projectRouter.post("/new/project", projectsController.addNewProject)
projectRouter.get("/project/list", projectsController.getAllProjects)
projectRouter.get("/project/:id", projectsController.getProjectById)
projectRouter.put("/project/update/:id", projectsController.updateProject)
projectRouter.delete("/project/delete/:id", projectsController.deleteProject)
module.exports = projectRouter