const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Service is up and running on port ${port}`);
});