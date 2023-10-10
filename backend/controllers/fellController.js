const Fell = require('../models/fellModel')
const mongoose = require('mongoose')

// get all fells
const getFells = async (req, res) => {
    const fells = await Fell.find({}).sort({height: -1})

    res.status(200).json(fells)
}
// get a single fell
const getFell = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such fell'})
    }
    const fell = await Fell.findById(id)

    if(!fell) {
        return res.status(404).json({error: 'No such fell'})
    }

    res.status(200).json(fell)
}

// create new fell
const createFell = async (req, res) => {
    const {title, height, area, climbed} = req.body

    try {
        const fell = await Fell.create({title,height,area,climbed})
        res.status(200).json(fell)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// delete a fell
const deleteFell = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such fell'})
    }

    const fell = await Fell.findOneAndDelete({_id: id})

    if(!fell) {
        return res.status(404).json({error: 'No such fell'})
    }

    res.status(200).json(fell)

}

// update a workout 
const updateFell = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such fell'})
    }

    const fell = await Fell.findOneAndUpdate({_id: id}, {
      ...req.body  
    })

    if(!fell) {
        return res.status(404).json({error: 'No such fell'})
    }

    res.status(200).json(fell)
}



module.exports = {
    createFell,
    getFell,
    getFells,
    deleteFell,
    updateFell
}