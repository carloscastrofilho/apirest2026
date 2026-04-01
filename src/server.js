// const express = require("express");
import express, { json } from "express";
import swRoutes from "./view/routes.js";

// import {createDb } from "./databases/createDatabase.js"
const Port = 3500;
const app = express();

app.use(json());
app.use(swRoutes);

app.get("/test", (req, res) => {
    res.status(200).json({ "message": "servidor rodando na porta 3500" })
});

// app.get("/db", (req, res) => {
//     // const response = createDb();
//     // res.status(200).json({ "message": response })
// });


app.listen(Port, () => {
    console.log(`Servidor rodando na porta: ${Port} \n CTRL+C para o servidor`);
})
