import mysql from "mysql";

export const db = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "mF41071020!",
    database: "crud" 
})