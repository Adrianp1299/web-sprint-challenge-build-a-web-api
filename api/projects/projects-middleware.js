// add middlewares here related to projects
function validateProject(req, res, next) {
    const { name, description } = req.body
    if (!name || !description) {
      res.status(400).json({
        message: 'Please provide name and description',
      })
    } else{
      req.name = name
      req.description = description
      next()
    }
  }

  module.exports = {
    validateProject,
  }