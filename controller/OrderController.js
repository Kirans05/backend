const dbConnect = require("../database/db");

const makeOrder = async (req, res) => {
  try {
    let db = await dbConnect();
    let table = await db.collection("orders");
    let insertData = await table.insertOne(req.body);
    res.status(200).json({ msg: "inserted", insertData });
  } catch (err) {
    res.status(200).json({ msg: "err" });
  }
};

module.exports = {
  makeOrder,
};
