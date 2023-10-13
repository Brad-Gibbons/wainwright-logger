const Fell = require('../models/fellModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')

// get all fells
const getFells = async (req, res) => {
    // 
    const user_id = req.user._id.toHexString()
    // new ObjectId("65271540bc9a3913707cf6b1")

    // console.log(user_id)
    const fells = await User.findById(user_id)
    // console.log(fells)
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

// update a fell 
const updateFell = async (req, res) => {
    const {id} = req.params
    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: 'no such fell-from updatefell'})
    // }
    const climbed = req.body.climbed
    const email = req.body.user.email
    const fell = await User.findOneAndUpdate({email: email}, {
      ...req.body 
        // "user.fells.id" : climbed
        
    })
    console.log(fell)
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