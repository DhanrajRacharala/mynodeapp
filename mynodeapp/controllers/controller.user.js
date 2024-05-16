// routes, requests

const express = require('express')
const router = express.Router()

// importing services.user.js

const services = require('../services/services.user') 

router.get("/", async(request,response) => {
    const users = await services.getAllUsers()
    response.send(users.rows)
})

router.get("/users", async(request,response) => {
    const users = await services.getAllUsers()
    response.send(users)
})

module.exports = router