const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let persons = [
  { name: "James", age: "15", hobby: "soccer" },
  { name: "Jimmy", age: "19", hobby: "Video Games" },
  { name: "Hildegard", age: "45", hobby: "Cats" },
];

app.get("/personen", (req, res) => {
  res.send(persons);
});

//post auf /addPerson um neue Person zu erstellen

app.post("/personen", (req, res) => {
  req.body;
  res.send(persons);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
