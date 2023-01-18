const express = require("express")
const {studentRouter} = require("./routes/studentRouter")
const {createDatabase} = require("./connection")
const {marksRouter} = require("./routes/marksRouter")
const app = express()

const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//student
app.use("/studentInfo", studentRouter)
app.use("/studentMarks",marksRouter)

//database
app.use("/db",createDatabase)

app.listen(port, () => {
    console.log("listening on port " + port)
})