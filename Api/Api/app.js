import ejs from "ejs";
import fetch from "node-fetch";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const URL = "https://cat-fact.herokuapp.com/facts";
// const response = await fetch(URL);
// const data = await response.json();
// console.log(data);
async function getFacts() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

app.get("/", function (req, res) {
  const facts = getFacts();
  res.render("index", { data: facts });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
