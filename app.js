const express = require("express");
const app = express();
const port = 3000;

let persons = [
  { name: "James", age: "15", hobby: "soccer" },
  { name: "Jimmy", age: "19", hobby: "Video Games" },
  { name: "Hildegard", age: "45", hobby: "Cats" },
];

app.get("/personen", (req, res) => {
  res.send(persons);
});

//TODO: GET auf /person?name=James um eine einzelne Person zu erhalten
app.get("/path", (req, res) => {
  //req.query.name um query parameter abzufragen
  let person = getPerson("hierNameEinfügen");
  //hier eine responds senden
});

//TODO: POST auf /addPerson um neue Person zu erstellen
app.post("/path", (req, res) => {
  //req.body enthält die Informationen die mitgeschickt wurden
  //nutze addPerson() um eine neue Person hinzuzufügen
  res.send("geschafft!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function getPerson(name) {
  return persons.find((p) => p.name === name);
}

function addPerson(newPerson) {
  persons.push(newPerson);
}
