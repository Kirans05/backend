const { generateTocken } = require("../tocken/generateToken");
const dbConnect = require("../database/db");

const userSignUp = async (req, res) => {
  try {
    let db = await dbConnect();
    let table = await db.collection("users");
    let findData = await table.find({ email: req.body.email }).toArray();
    if (findData.length) {
      res.status(200).json({ msg: "user already exist" });
    } else {
      let insertData = await table.insertOne(req.body);
      res.status(200).json({ msg: "inserted", insertData });
    }
  } catch (err) {
    res.status(200).json({ msg: "err" });
  }
};

const loginUser = async (req, res) => {
  try {
    let db = await dbConnect();
    let table = await db.collection("users");
    let findData = await table.find({ email: req.body.email }).toArray();
    if (findData.length) {
      if (findData[0].password == req.body.password) {
        let token = await generateTocken(findData[0]._id, findData[0].email);
        res.status(200).json({ msg: "login successfull", token, findData });
      } else {
        res.status(200).json({ msg: "Incorrect password" });
      }
    } else {
      res.status(200).json({ msg: "user Not Found please sign up" });
    }
  } catch (err) {
    res.status(200).json({ msg: "err" });
  }
};

module.exports = {
  userSignUp,
  loginUser,
};
