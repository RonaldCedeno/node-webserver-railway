require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Middleware: Se ejecuta antes que todo
// Servir contenido estático
app.use(express.static("public"));

// --- YA QUE PASA POR EL MIDDLEWARE PRIMERO, ENTONCES NO SE EJECUTA '/' SI EXISTE UN INDEX EN PUBLIC
// app.get("/", function (req, res) {
//   res.send("Home page");
// });

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Ronald",
    titulo: "Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Ronald",
    titulo: "Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Ronald",
    titulo: "Node",
  });
});

// app.get("/hola-mundo", function (req, res) {
//   res.send("Hello World");
// });

// app.get("/index", function (req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/generic", function (req, res) {
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", function (req, res) {
//   res.sendFile(__dirname + "/public/elements.html");
// });

// app.get("*", function (req, res) {
//   res.sendFile(__dirname + "/public/404.html");
//   //   res.send("Page not found (404)");
// });

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
