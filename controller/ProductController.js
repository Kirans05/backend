const dbConnect = require("../database/db");

const addProduct = async (req, res) => {
  try {
    let db = await dbConnect();
    let table = await db.collection("products");
    let insertData = await table.insertOne(req.body);
    res.status(200).json({ msg: "inserted", insertData });
  } catch (err) {
    res.status(200).json({ msg: "err" });
  }
};

const getAllProduct = async (req, res) => {
  try {
    let db = await dbConnect();
    let table = await db.collection("products");
    let allData = await table.find({}).toArray();
    res.status(200).json({ msg: "fetched Successfully", allData });
  } catch (err) {
    res.status(200).json({ msg: "err" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    let name = req.params.name;
    let db = await dbConnect();
    let table = await db.collection("products");
    let allData = await table.find({ name: name }).toArray();
    res
      .status(200)
      .json({ msg: "fetched single Product Successfully", allData });
  } catch (err) {
    res.status(200).json({ msg: "err" });
  }
};

module.exports = {
  addProduct,
  getAllProduct,
  getSingleProduct,
};
