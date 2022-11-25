const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Greetings!");
});

app.listen(4000, () => {
  console.log("Server is listening on port: 4000");
});
