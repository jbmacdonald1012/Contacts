const express = require('express');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

mongodb.initializeDB((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});