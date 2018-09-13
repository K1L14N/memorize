const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Table = require('../models/Table')

router.get('/', (req, res, next) => {
    Table.find()
        .exec()
        .then(docs => {
            console.log(docs)
            if (docs.length >= 0) {
                res.status(200).json(docs)
            } else {
                res.status(201).json({
                    message: 'No entries found'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.post('/', (req, res, next) => {
    const table = new Table({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
    })
    table.save().then(doc => {
        console.log(doc)
        if (doc) {
            res.status(200).json({
                table
            })
        } else {
            res.status(404).json({
                message: 'No valid ID entered'
            })
        }
    }).catch(err => {
        console.error(err)
        res.status(500).json({
            error: err
        })
    })
})

router.get('/:tableId', (req, res, next) => {
    const id = req.params.tableId
    Table.findById(id)
        .exec()
        .then(doc => {
            console.log(doc)
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.patch('/:tableId', (req, res, next) => {
    const id = req.params.tableId
    const updateOps = {}
    // [
    //     {"propName": "name", "value": "newName"}
    // ]
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Table.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

router.delete('/:tableId', (req, res, next) => {
    const id = req.params.tableId
    Table.findByIdAndRemove(id)
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Table Removed Successfuly"
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router