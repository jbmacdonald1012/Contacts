const express = require('express');

const router = express.Router();

router.use('/', require('./mainRoute'));

module.exports = router;