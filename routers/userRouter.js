const UserBL = require('../models/userBL');
const express = require('express')
const router = express.Router()

router.route('/')
    .get(async (req,res) => {
        UserBL.getAllUsers().then(data => {
            return res.json(data)
        })
    })

router.route('/:id')
    .get(async (req,res) => {
        let id = req.params.id;
        UserBL.getUser(id).then(data => {
            return res.json(data)
        })
    })

router.route('/')
    .post(async (req,res) => {
        let obj = req.body
        UserBL.addUser(obj).then(data => {
            return res.json(data)
        })
    })

router.route('/:id')
    .put(async (req,res) => {
        let id = req.params.id;
        let obj = req.body
        UserBL.updateUser(id,obj).then(data => {
            return res.json(data)
        })
    })

router.route('/:id')
    .delete(async (req,res) => {
        let id = req.params.id;
        UserBL.deleteUser(id).then(data => {
            return res.json(data)
        })
    })
module.exports = router