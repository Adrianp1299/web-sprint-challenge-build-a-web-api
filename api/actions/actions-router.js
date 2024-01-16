// Write your "actions" router here!
const express = require('express')

const validateAction = require('./actions-middlware')

const Action = require('./actions-model')
const router = express.Router()

// router.get('/', (req, res, next) =>{

// });

// router.get('/:id', (req, res, next) =>{

// });

// router.post('/', validateAction, (req, res, next) =>{

// });

// router.put('/:id', (req, res, next) =>{

// });

// router.delete('/:id', async (req, res, next) =>{

// });

module.exports = router