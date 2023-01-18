
const express=require("express")
const { createMarksTable,marksCreate,marksGet,updatemarks,marksDelete, avgData, min, max} = require("../controllers/marksController")
const marksRouter=express.Router()

marksRouter.get("/createMarksTable",createMarksTable)
marksRouter.post("/create",marksCreate)
marksRouter.get("/get",marksGet)
marksRouter.patch("/update",updatemarks)
marksRouter.delete("/delete",marksDelete)
marksRouter.get("/avg",avgData)
marksRouter.get("/min",min)
marksRouter.get("/max",max)

module.exports={marksRouter}