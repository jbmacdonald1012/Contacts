const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const GetAllContacts = async (request, response) => {
  const allContactsResult = await mongodb
    .getDB('main-contacts')
    .collection('contacts')
    .find();

  allContactsResult.toArray().then((allContactsList) => {
    response.setHeader('Content-Type', 'application.json');
    response.status(200).json(allContactsList);
  });
};

const GetContactById = async (request, response) => {
  const contactId = new ObjectId(request.params.id);
  const singleContactResult = await mongodb
    .getDB('main-contacts')
    .collection('contacts')
    .find({ _id: contactId });

  singleContactResult.toArray().then((singleContactList) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(singleContactList[0]);
  });
};

module.exports = {
  GetAllContacts,
  GetContactById,
};
