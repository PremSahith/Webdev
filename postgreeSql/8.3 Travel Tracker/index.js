import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Pj1",
  password: "prem@iiit",
  port: 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("select country_code  from visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add",async(req,res)=>{
 const input=req.body.country;

 const result=await db.query("select country_code from countries where LOWER(country_name) like '%' ||$1 || '%';",[input.tolowerCase()]);
    if (result.rows.length > 0) {
      const countryCode = result.rows[0].country_code;

      // 2️⃣ Insert into visited_countries
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
} else {
      console.log("❌ Country not found in database");
    }

    // await db.query("insert into visited_countries (country_code) values=$1 ",[countryCode]);
    res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
