const User = require("../models/user");


const getUser = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findOne(id, { email: 1, phone: 1, _id: 0 });
};

const addUser = async (email, name, location, phone, password) => {
  const newUser = new User({ email, name, location, phone });

  newUser.setPassword(password);

  return await newUser.save();
};

const updateToken = async (id, token = null) => {
  return await User.findByIdAndUpdate(
    id,
    { token },
    { returnDocument: "after" }
  );
};

const updateUser = async (_id, body) => {
  return User.findOneAndUpdate(_id, body, {
    returnDocument: "after",
    fields: { _id: 0, password: 0, token: 0 },
  });
};

module.exports = {
  getUser,
  getUserById,
  addUser,
  updateToken,
  updateUser,
};
