const { MongoClient } = require('mongodb');

let con = new MongoClient('mongodb://0.0.0.0:27017');
const conncetToDb = async () => {
  try {
    let dbConnect = await con.connect();
    let dbName = await dbConnect.db('ecommerce');
    return dbName;
  } catch (err) {}
};

module.exports = conncetToDb;
