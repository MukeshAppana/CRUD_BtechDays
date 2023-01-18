const express = require("express")
const { connection } = require("../connection")

//create table
const createMarksTable = (req, res) => {
    let queryData = "create table marks(id int auto_increment, Telugu int, Hindi int, English int,Maths int,primary key(id))";
    connection.query(queryData, (err, results) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(results)
            res.send({ "status": "200", "message": "Table created" })
        }
    })
}

//create
const marksCreate = (req, res) => {
    let product = req.body;
    //Here "marks" is table name
    queryData = "insert into marks(Telugu,Hindi,English,Maths)values(?,?,?,?)";
    connection.query(queryData, [product.Telugu, product.Hindi, product.English,product.Maths], (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: product })
        }
    })
}

//get
const marksGet = (req, res) => {
    var queryData = "select*from marks"
    connection.query(queryData, (err, results) => {
        if (err) {
            return res.send({ "status": "404", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })
}

//update
const updatemarks = (req, res) => {
    const id = req.params.id
    let product = req.body;
    var queryData = "update marks set Telugu=?,Hindi=?,English=?,Maths=? where id=?"
    connection.query(queryData, [product.Telugu, product.Hindi, product.English,product.Maths, id], (err, results) => {
        if (err) {
            return res.send({ "status": "404", "message": err.message })
        }
        else {
            if (results.affectedRows == 0)// 0 It means if no Id found
            {
                return res.send({ "status": "404", "message": "marks id doesnot found " })
            }
            return res.send({ "status": "200", "message": "marks data updated successfully" })
        }
    })
}

//delete
const marksDelete = (req, res) => {
    const id = req.params.id
    const queryData = "delete from marks where id=?"
    connection.query(queryData, [id], (err, results) => {
        if (err) {
            return res.send({ "status": "404", "message": err.message })
        }
        else {
            if (results.affectedRows == 0)// 0 It means if no Id found
            {
                return res.send({ "status": "404", "message": "marks id doesnot found " })
            }
            return res.send({ "status": "200", "message": "marks data deleted successfully" })
        }
    })
}

const avgData=(req,res)=>
{
    queryData = "SELECT AVG (Telugu) FROM marks;"
    connection.query(queryData, (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })
}

const min=(req,res)=>
{
    queryData = "SELECT MIN(Telugu) AS Telugu FROM marks"
    connection.query(queryData, (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })
}


const max=(req,res)=>
{
    queryData = "SELECT MAX(Telugu) AS Telugu FROM marks"
    connection.query(queryData, (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })
}
module.exports = { createMarksTable, marksCreate,updatemarks, marksGet, marksDelete,avgData,min,max}