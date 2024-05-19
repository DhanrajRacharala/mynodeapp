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

router.post("/createuser/", async(request,response) => {
    const data = request.body
    const users = await services.createUser(data)
   //console.log(data)
    
     response.json({message:"user added successfully"})
    
})

module.exports = router