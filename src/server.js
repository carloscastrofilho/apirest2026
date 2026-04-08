// const express = require("express");
import express, { json } from "express";
import os from 'os';
import swRoutes from "./view/routes.js";

const Port = 3500;
const app = express();

app.use(json());
app.use(swRoutes);

app.get("/test", (req, res) => {
    res.status(200).json({ "message": "servidor rodando na porta 3500" })
});

// Função auxiliar para pegar o IP da rede local
const getLocalIp = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            // Filtra para pegar IPv4 e que não seja o endereço de loopback (localhost)
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
};

app.get('/ip-servidor', (req, res) => {
    const networkInterfaces = app.networkInterfaces();
    let serverIp = '127.0.0.1'; // IP padrão (localhost)
    res.json({ ipServidor: serverIp });
});

app.listen(Port, () => {
 const ipServidor = getLocalIp();
    // const porta = app.address().port;
    console.log(`Servidor ouvindo em: http://${ipServidor}:${Port}`);
    console.log(`Acesse também em: http://localhost:${Port}`);
    console.log(`CTRL+C para encerrar o servidor`);
})
