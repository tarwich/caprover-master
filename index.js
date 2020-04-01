const express = require("express");
const { static } = require("express");

const { PORT = 80 } = process.env;

const app = express();

app.use(static("./www"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
