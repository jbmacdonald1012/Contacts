const mongodb = require('../db/connect');

const CreateNewContact = async (request, response) => {
  const newContactData = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    favoriteColor: request.body.favoriteColor,
    birthday: request.body.birthday,
  };

  const createNewContactResult = await mongodb
    .getDB()
    .collection('contacts')
    .insertOne(newContactData);

  if (createNewContactResult.acknowledged === true) {
    response.status(201).json('Successfully created. Contact ID:', result._id);
  } else {
    console.error('Unexpected error upon insert');
    response
      .status(500)
      .json(
        'An unexpected error occurred while attempting to create the new contact'
      );
  }
};

module.exports = CreateNewContact;
