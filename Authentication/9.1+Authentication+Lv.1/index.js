import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Proj",
  password: "prem@iiit",
  port: 5432,
});
db.connect();
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const insertQuery = "insert into password (email,password) values ($1,$2)";
  try {
    await db.query(insertQuery, [email, password]);
    res.render("secrets.ejs");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering user");
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const selectQuery = "select * from password where email=$1 and password=$2";
  try {
    const result = await db.query(selectQuery, [email, password]);
    if (result.rows.length > 0) {
      res.render("secrets.ejs");
    } else {
      res.send("Invalid credentials");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
