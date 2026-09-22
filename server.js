const http = require("http")
const express = require("express")

const app = express()
const PORT = 3000;

app.get('/' , (req , res) => {
    res.send("Главная страница")
})

app.get('/about' , (req , res) => {
    res.send("About")
})

app.get('/contacts' , (req , res) => {
    res.send("Контакты")
})

app.get('/products/:id' , (req, res)=>{
    console.log(req.params.id);
    
    res.send(`Продукт id: ${req.params.id}`)
})
app.get('/number/:id' , (req, res)=>{
    console.log(req.params.id);
    
    res.send(`Ваш номер телефона ${req.params.id}`)
})

app.post('/addproduct' , (req , res)=>{
    const {name , age} = req.body;
})





app.listen(PORT, ()=>{
    console.log("Сервер запущен успешно по адресу: 127.0.0.1:3000");
    
})

 