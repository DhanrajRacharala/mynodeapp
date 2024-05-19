// web server create

// importing express



const express = require ("express");

const db =  require("./db")

const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

// import controllers router

const routes = require("./controllers/controller.user")

app.use("/api",routes)



//app.use(express.json())

// app.get("/", (request, response) => {
//     response.send("HI");
// })

// app.get("/myapp", (request,response) => {
//     response.send("Hello world");
// })

db.connect().then(() => console.log("Database is Connected"))
.then(() => {
    // listen(port, function)
    // funtion return server start or fail
    app.listen(5000, () => {
        console.log("Running on port 5000");
    })
})



