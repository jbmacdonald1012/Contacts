const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const UpdateExistingContact = async (request, response) => {
  const existingContactId = new ObjectId(request.params.id);

  const updatedContact = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    favoriteColor: request.body.favoriteColor,
    birthday: request.body.birthday,
  };

  const updateResult = await mongodb.getDB
    .collection('contacts')
    .replaceOne({ _id: existingContactId }, updatedContact);

  if (updateResult.modifiedCount > 0) {
    response
      .status(204)
      .json(
        'Successfully updated existing contact with Contact ID:',
        updateResult._id
      );
  } else {
    console.error('Unexpected error on update attempt');
    response
      .status(500)
      .json(
        'An unexpected error occurred while attempting to update the contact data.'
      );
  }
};

module.exports = UpdateExistingContact;
