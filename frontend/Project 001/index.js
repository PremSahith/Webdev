import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");

// PostgreSQL client setup
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Proj",
  password: "prem@iiit",
  port: 5432,
});
db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = "SELECT * FROM password WHERE mail = $1 AND password = $2";
    const result = await db.query(query, [email, password]);
    if (result.rows.length > 0) {
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error during login");
  }
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = "INSERT INTO password (mail,password) VALUES ($1,$2)";
    await db.query(query, [email, password]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.render("signup", { error: "Error during signup" });
  }
});

// Create a new user
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
