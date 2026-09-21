const http = require("http")

const PORT = 3000;

const server = http.createServer((req, res)=>{
    res.end("Hello World")

})

server.listen(PORT, ()=>{
    console.log("Сервер запущен успешно по адресу: 127.0.0.1:3000");
    
})

 