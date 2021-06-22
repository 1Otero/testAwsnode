const http = require("http")
const express = require("express")

const server=http.createServer((req,res)=>{
    res.end("lol welcomeeeee")
})


const app = express();

app.get("/",(req,res)=>{ res.send("lollll wlcome a up level")})
app.listen({port: 3000},()=>{
    console.log("lol listen in port 3000")
})





