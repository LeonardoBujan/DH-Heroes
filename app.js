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
});

app.get("/berners-lee", (req, res)=>{
    const rutaBerners = path.join(__dirname, "./views/berners-lee.html");
    res.sendFile(rutaBerners);
});

app.get("/clarke", (req, res)=>{
    const rutaClarke = path.join(__dirname, "./views/clarke.html");
    res.sendFile(rutaClarke);
});

app.get("/hamilton", (req, res)=>{
    const rutaHamilton = path.join(__dirname, "./views/hamilton.html");
    res.sendFile(rutaHamilton);
});

app.get("/hopper", (req, res)=>{
    const rutaHopper = path.join(__dirname, "./views/hopper.html");
    res.sendFile(rutaHopper);
});

app.get("/lovelace", (req, res)=>{
    const rutaLovelace = path.join(__dirname, "./views/lovelace.html");
    res.sendFile(rutaLovelace);
});

app.get("/turing", (req, res)=>{
    const rutaTuring = path.join(__dirname, "./views/turing.html");
    res.sendFile(rutaTuring);
});