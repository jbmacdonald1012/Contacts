const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const DeleteExistingContact = async (request, response) => {
  const existingContactId = new ObjectId(request.params.id);
  const deleteResult = await mongodb
    .getDB()
    .collection('contacts')
    .deleteOne({ _id: existingContactId });

  if (deleteResult.deletedCount > 0) {
    response.status(204).json('Contact successfully deleted.');
  } else {
    console.error('Unexpected error while attempting to delete contact.');
    response
      .status(500)
      .json('An error occurred while attempting to delte contact.');
  }
};

module.exports = DeleteExistingContact;
