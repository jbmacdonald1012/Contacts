const express = require('express');

const router = express.Router();

//GET controllers
const contactsGetController = require('../controllers/contactsGetController');

//POST Controllers
// const contactsPostController = require('');

//PUT Controllers
// const contactsPutController = require('');

//DELETE Controllers
// const contactsDeleteController = require('');

//GET Routes
router.get('/', contactsGetController.GetAllContacts);
router.get('/:id', contactsGetController.GetContactById);

module.exports = router;
