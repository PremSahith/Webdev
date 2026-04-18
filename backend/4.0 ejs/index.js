import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port =3000;
// app.use(bodyParser.urlencoded({ extended: true }));
// function get(req,res,next){
//     const today=new Date();
//     const day=today.getDay();
//     req.day=day;
//     next();
// }
// app.use(get);

app.get("/",(req,res)=>{

    const today=new Date();
    const day=today.getDay();

    let type="its a weekend";
    let advice="work hard";

    if(day===0 || day===6){
        type="its weekend";
        advice ="enjoy";
    }
    res.render("index.ejs",{
        dayType:type,
        advice :advice,
    })
});

// app.post("/check",(req,res)=>{
//     res.render("index.ejs",
//         {day : req.day,
//         input: req.body.day   
// });
// });



app.listen(port, () => {
  console.log(`Server running ${port}.`);
});