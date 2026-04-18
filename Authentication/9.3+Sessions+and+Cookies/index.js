import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import pkg from "passport-local";
const { Strategy } = pkg;

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

app.get("/secrets", (req, res) => {
  console.log("User info:", req.user);
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE mail = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (mail, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, function (err) {
            if (err) {
              console.log(err);
              return;
            }
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);

passport.use(
  new Strategy(async function Verify(username, password, cb) {
    console.log("Verifying user:", username);
    try {
      const result = await db.query("SELECT * FROM users WHERE mail = $1", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, result) => {
          if (err) {
            return cb(err);
          } else {
            if (result) {
              return cb(null, user);
            } else {
              return cb(null, false, { message: "Incorrect password." });
            }
          }
        });
      } else {
        return cb("Incorrect username.");
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser(function (user, cb) {
  cb(null, user.id); // store user id in session
});

passport.deserializeUser(async function (id, cb) {
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    cb(null, result.rows[0]); // fetch full user
  } catch (err) {
    cb(err, null);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
