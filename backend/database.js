import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config()
const pool = mysql.createPool({
    host: "localhost", 
    user:"root",
    password:"mcoding",
    database:"jdbcdb"
}).promise();


const getData = async ()=>{
    const [result] = await pool.query("SELECT * FROM student");
    return result;
}

const getDataUsingId = async (id)=>{
    const [result] = await pool.query('SELECT * FROM student WHERE roll_number=?',[id]);
    return result;
}
const createRecord = async (name, percentage, address)=>{
    const [result] = await pool.query('insert into student(name,percentage,address) values ( ?,?,?)',[name,percentage,address]);
    return result.insertId;
}

const [result] = await pool.query("SELECT * FROM student");
console.log(result);

module.exports = {
    getData,
    getDataUsingId,
    createRecord
};