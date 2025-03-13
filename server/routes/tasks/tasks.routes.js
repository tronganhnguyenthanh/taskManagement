const express = require("express")
const taskController = require("../../controllers/tasks/task.controllers")
const taskRouterAPI = express.Router()
taskRouterAPI.post("/new/task", taskController.addNewTaskDescription)
taskRouterAPI.get("/task/list", taskController.getAllTaskDescription)
taskRouterAPI.put("/task/update/:id", taskController.updateTaskDescription)
taskRouterAPI.delete("/task/delete/:id", taskController.deleteTaskDescriptionById)
module.exports = taskRouterAPI