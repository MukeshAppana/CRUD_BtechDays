const mysql = require("mysql2")
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database:"studentManagementSystem"
});

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("connection successfull")
    }
})

const createDatabase=("/createDB",(req,res)=>{
    let sql = "create database studentManagementSystem";
    connection.query(sql, (err, results) => 
    {
        if (err) {
            console.log(err)
        }
        else {
            console.log(results)
            res.send({ "status": "200", "message": "Database created", })
        }
    })
})



module.exports = {connection,createDatabase}

