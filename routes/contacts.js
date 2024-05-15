const express = require('express');

const router = express.Router();

//GET controllers
const contactsGetController = require('../controllers/contactsGetController');

//POST Controllers
const contactsPostController = require('../controllers/contactsPostController');

//PUT Controllers
const contactsPutController = require('../controllers/contactsPutController');

//DELETE Controllers
const contactsDeleteController = require('../controllers/contactsDeleteController');

//GET Routes
router.get('/', contactsGetController.GetAllContacts);

router.get('/:id', contactsGetController.GetContactById);

router.post('/', contactsPostController.CreateNewContact);

router.put('/:id', contactsPutController.UpdateExistingContact);

router.delete('/:id', contactsDeleteController.DeleteExistingContact);

module.exports = router;
