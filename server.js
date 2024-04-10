// Create an express server for serving html, css, and js file
const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

app.use("/static", express.static(path.join(__dirname, "static")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
