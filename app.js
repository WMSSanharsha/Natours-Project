const fs = require("fs");
const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to NodeJS!!");
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port : ${PORT}`);
});
