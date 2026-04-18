import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// TODO 1: Add your own bearer token
const yourBearerToken = "5f25e212-6337-4bbb-b6bc-cd5673e4a763";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

// Built-in body parsers (no need for body-parser)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: POST new secret
  try {
    const result = await axios.post(API_URL + "/secrets", req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: PUT update secret
  try {
    const result = await axios.put(API_URL + "/secrets/" + searchId, req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: PATCH update secret
  try {
    const result = await axios.patch(API_URL + "/secrets/" + searchId, req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: DELETE secret
  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
