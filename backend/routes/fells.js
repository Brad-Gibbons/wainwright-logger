const express = require('express')
const Fell = require('../models/fellModel')
const {createFell, getFell, getFells, deleteFell, updateFell} = require('../controllers/fellController')

const router = express.Router()
// get all
router.get('/' , getFells)

// get single fell
router.get('/:id', getFell)

// post new fell
router.post('/', createFell )


router.delete('/:id', deleteFell)

router.patch('/:id', updateFell)


module.exports = router