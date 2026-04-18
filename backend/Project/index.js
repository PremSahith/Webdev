import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const YOUR_API_KEY = "a3db2a6d7e6ec9237d7a16e8cef7d88f";

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// Root route
app.get("/", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    // No city provided, just show the form and prompt
    return res.render("index2", {
      weather: undefined,
      temp: undefined,
      error: undefined,
      city: undefined
    });
  }
  try {
    // Get current weather by city name
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: YOUR_API_KEY,
        units: "metric"
      }
    });
    res.render("index2", {
      weather: response.data,
      temp: response.data.main.temp,
      error: null,
      city: city
    });
  } catch (error) {
    console.error(error.message);
    let errorMsg = "Failed to fetch weather data";
    if (error.response && error.response.data && error.response.data.message) {
      errorMsg += ": " + error.response.data.message;
    }
    res.render("index2", {
      weather: null,
      temp: null,
      error: errorMsg,
      city: city
    });
  }
});

// // // Weather route
// app.get("/", async (req, res) => {
//   const city = req.query.city || "London";
//   try {
//     // Get current weather by city name
//     const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
//       params: {
//         q: city,
//         appid: YOUR_API_KEY,
//         units: "metric"
//       }
//     });
//     res.render("index2", {
//       weather: response.data,
//       temp: response.data.main.temp,
//       error: null,
//       city: city
//     });
//   } catch (error) {
//     // Detailed error logging
//     console.error("Error fetching weather data:", error);
//     let errorMsg = "Failed to fetch weather data";
//     if (error.response) {
//       errorMsg += ` (Status: ${error.response.status})`;
//       if (error.response.data) {
//         errorMsg += `: ${JSON.stringify(error.response.data)}`;
//       }
//     } else {
//       errorMsg += `: ${error.message}`;
//     }
//     res.render("index2", {
//       weather: null,
//       temp: null,
//       error: errorMsg,
//       city: city
//     });
//   }
// });
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});