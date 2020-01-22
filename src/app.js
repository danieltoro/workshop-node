const express = require("express");
const mongoose = require("mongoose");

const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const URL_MONGODB ="mongodb+srv://workshop:ck84iHOhtzNuwepr@cluster0-wp32v.mongodb.net/test?retryWrites=true&w=majority";

app.listen(8080, err => {
  if (err) throw err;

  console.log("Server listening on port 8080");

  return mongoose
    .connect(URL_MONGODB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => {
      console.log("Server listening on port 8080");
    })
    .catch(err => {
      throw err;
    });
});
