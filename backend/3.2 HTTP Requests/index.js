import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
  res.send("<h1>HElo</h1>");
});

app.get("/about",(req,res)=>{
  res.send("<h1>ITS ME</h1>");
});

app.get("/contact",(req,res)=>{
  res.send("<h1>94943133</h1>");
});

app.listen(port,()=>{
  console.log(`Server is runnin on ${port}.`);

});