const express = require("express")
const { connection } = require("../connection")

//create table
const createStudentTable = (req, res) => {
    let queryData = "create table student(id int auto_increment, name varchar(255), description varchar(255), address varchar(255), marks_id int,primary key(id))";
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
const studentCreate = (req, res) => {
    let product = req.body;
    //Here "student" is table name
    queryData = "insert into student(name,description,address,marks_id)values(?,?,?,?)";
    connection.query(queryData, [product.name, product.description, product.address,product.marks_id], (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: product })
        }
    })
}

//get
const studentGet = (req, res) => {
    var queryData = "select*from student"
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
const updateStudent = (req, res) => {
    const id = req.params.id
    let product = req.body;
    var queryData = "update student set name=?,description=?,price=? where id=?"
    connection.query(queryData, [product.name, product.description, product.price, id], (err, results) => {
        if (err) {
            return res.send({ "status": "404", "message": err.message })
        }
        else {
            if (results.affectedRows == 0)// 0 It means if no Id found
            {
                return res.send({ "status": "404", "message": "student id doesnot found " })
            }
            return res.send({ "status": "200", "message": "student data updated successfully" })
        }
    })
}


//delete
const studentDelete = (req, res) => {
    const id = req.params.id
    const queryData = "delete from student where id=?"
    connection.query(queryData, [id], (err, results) => {
        if (err) {
            return res.send({ "status": "404", "message": err.message })
        }
        else {
            if (results.affectedRows == 0)// 0 It means if no Id found
            {
                return res.send({ "status": "404", "message": "student id doesnot found " })
            }
            return res.send({ "status": "200", "message": "student data deleted successfully" })
        }
    })
}

//left join
const studentLeftJoin = (req, res) => {
    //Here "student" is table name
    queryData = "select student.id,student.name as studentName,student.description,marks.English  FROM student LEFT JOIN marks ON marks.id=student.marks_id"
    connection.query(queryData, (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })
}

//Right join
const studentRightJoin = (req, res) => {
    //Here "student" is table name
    queryData = "select student.id,student.name as studentName,student.description,department.name as departmentName FROM student RIGHT JOIN department ON department.id=student.dept_id"
    connection.query(queryData, (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })

}

const countData=(req,res)=>
{
    queryData = "SELECT COUNT (id) FROM student;"
    connection.query(queryData, (err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })
}


const limit=(req,res)=>
{

    queryData = "SELECT * FROM student limit 2"
    connection.query(queryData,(err, results) => {
        if (err) {
            return res.send({ "status": "400", "message": err.message })
        }
        else {
            return res.send({ "status": "200", "message": "success", data: results })
        }
    })
}


module.exports = { createStudentTable, studentCreate,updateStudent, studentGet, studentDelete, studentLeftJoin, studentRightJoin,countData,limit }