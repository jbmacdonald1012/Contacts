const dotenv = require('dotenv');

const { MongoClient } = require('mongodb');

dotenv.config();

let _db;

const initializeDB = (callback) => {
  if (_db) {
    console.log('Db is already initialized');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGO_CONNECTION_STRING)
    .then((client) => {
      _db = client.db('main-contacts');
      callback(null, _db);
    })
    .catch((error) => {
      callback(error);
    });
};

const getDB = () => {
  if (!_db) {
    throw Error('DB not initialized');
  }
  return _db;
};

module.exports = {
  initializeDB,
  getDB,
};
