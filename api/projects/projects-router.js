// Write your "projects" router here!
const express = require('express')

const { validateProject } = require('./projects-middleware')

const Project = require('./projects-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
});

router.get('/:id', async (req, res, next) =>{
    try {
        const project = await Project.get(req.params.id)
        if (!project) {
            res.status(404).json({
                message: "The project with the specified ID does not exist"
            })
        } else {
            res.json(project)
        }
    } catch (err) {
        res.status(500).json({
          message:'problem finding user',
        })
      }
});

// router.post('/', validateProject, (req, res, next) =>{

// });

// router.put('/:id', (req, res, next) =>{

// });

// router.delete('/:id', async (req, res, next) =>{

// });

// router.get(':id/actions', (req, res, next) =>{

// });

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      customMessage: 'something tragic inside projects router happened',
      message: err.message,
      stack:err.stack,
    })
  })

module.exports = router