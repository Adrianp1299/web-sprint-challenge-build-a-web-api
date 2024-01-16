// add middlewares here related to actions
function validateAction(req, res, next) {
    const { notes, description } = req.body
    if (!notes || !description) {
      res.status(400).json({
        message: 'Please provide notes and description',
      })
    } else{
      req.notes = notes
      req.description = description
      next()
    }
  }

  module.exports = {
    validateAction,
  }