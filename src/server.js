// const express = require("express");
import express, { json } from "express";
import mysql from "mysql2/promise";

const Port = 3500;
const app = express();

// const connection = mysql.createConnection(
//     {
//         host: "localhost",
//         user: "root",
//         port: 3306,
//         database: "apirest"
//     }
// )   

const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'apirest'
        });

async function testConnection() {
    try {
        

        // Tenta obter uma conexão do pool
        const connection = await pool.getConnection();
        console.log('✅ Conexão estabelecida com sucesso!');

        // Libera a conexão de volta para o pool
        connection.release();
    } catch (error) {
        console.error('❌ Erro ao conectar ao banco de dados:', error.message);
    }
}

//testConnection();

app.use(json());

app.get("/users", async (req, res) => {
    try {
        const [results, fields] = await pool.execute(
            'SELECT * FROM `users` ORDER BY `userName` '
        );
        console.log(results); 
        console.log(fields); 
        res.status(202).json({"message":"Sucess","data":results});
    } catch (err) {
        console.log(err);
        res.status(403).json({"message": err})
    }
})

app.get("/test", (req, res) => {
    res.status(200).json({ "message": "servidor rodando na porta 3500" })
});

app.listen(Port, () => {
    console.log(`Servidor rodando na porta: ${Port} \n CTRL+C para o servidor`);
})
