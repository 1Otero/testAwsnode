const http = require("http")
const express = require("express")

const server=http.createServer((req,res)=>{
    res.end("lol welcomeeeee")
})


const app = express();

console.log("las mejoressssss")
app.get("/",(req,res)=>{ res.send("lollll wlcome a up level")})

app.get("/lol",(req,res)=>{res.send("lollll con express")})

app.listen({port: 3001},()=>{
    console.log("lol listen in port 3000")
})





