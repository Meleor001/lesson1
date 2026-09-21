const http = require("http")
const express = require("express")

const app = express()
const PORT = 3000;

app.get('/' , (req , res) => {
    res.send("Главная страница")
})

app.get('/abaut' , (req , res) => {
    res.send("Abaut")
})

// const server = http.createServer((req, res)=>{
//     res.end("Hello World")


// })

app.listen(PORT, ()=>{
    console.log("Сервер запущен успешно по адресу: 127.0.0.1:3000");
    
})

 