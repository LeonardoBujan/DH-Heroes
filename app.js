const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path");

//servir una carpeta publica que contiene estilos e imagenes
app.use(express.static("public"));

//localhost:3000
app.listen(3000, ()=>{
    console.log("servidor encendido");
});

app.get("/", (req, res)=>{
    const rutaHome = path.join(__dirname, "./views/index.html");
    res.sendFile(rutaHome);
});

app.get("/babbage", (req, res)=>{
    const rutaBabbage = path.join(__dirname, "./views/babbage.html");
    res.sendFile(rutaBabbage);
})