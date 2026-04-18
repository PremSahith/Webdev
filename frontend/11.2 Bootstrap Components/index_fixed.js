// ...existing code...
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files (css, js, images) from "public" folder
app.use(express.static("public"));

// Set views directory and view engine for EJS
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.locals.location = ""; // default for every render
  next();
});


app.get("/", (req, res) => {
   res.render("index.ejs");
});
app.get("/index", (req, res) => {
   res.render("index.ejs");
});
app.get("/index2", (req, res) => {
   res.render("index2.ejs");
});
app.get("/index3", (req,res)=>{
   res.render("index3.ejs");
});
app.get("/index4", (req,res)=>{
   res.render("index4.ejs");
});
app.get("/index5", (req,res)=>{
   res.render("index5.ejs");
});
app.get("/login", (req, res) => {
   res.render("login.ejs");
});
app.get("/reply", (req, res) => {
   const location=(req.query.location || "").trim();
   res.render("reply.ejs",{location});
});
app.get("/temp", (req, res) => {
   res.render("temp.ejs");
});

app.listen(port, () => {
   console.log(`Server running on ${port}.`);
});
// ...existing code...
