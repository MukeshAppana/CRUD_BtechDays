
const express=require("express")
const { createStudentTable,studentCreate,studentGet,updateStudent,studentDelete,studentLeftJoin, countData, limit } = require("../controllers/studentController")
const studentRouter=express.Router()

studentRouter.get("/createStudentTable",createStudentTable)
studentRouter.post("/create",studentCreate)
studentRouter.get("/get",studentGet)
studentRouter.patch("/update",updateStudent)
studentRouter.delete("/delete",studentDelete)
studentRouter.get("/leftJoin",studentLeftJoin)
studentRouter.get("/count",countData)
studentRouter.get("/limit",limit)



module.exports={studentRouter}