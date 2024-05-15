const {Client} = require("pg")

const user = 'postgres'
const password = 'root'
const host = 'localhost'
const database = 'ams'
const port = '5432'

const db = new Client ({
    user,password,host,database,port
})

module.exports = db