const express = require('express')
const {createProject, getProjects, getProject, deleteProject, updateProject} = require('../controllers/projectController')


const router = express.Router()


//GET all projects
router.get('/',getProjects)

//GET a single project
router.get("/:id", getProject)

//POST a new project
router.post('/', createProject )

//DELETE a project
router.delete("/:id",deleteProject)

//UPDATE a project
router.put("/:id",updateProject)



module.exports = router