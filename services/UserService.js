const User = require('../models/User');

const createUser = async (data) => {
  const user = new User(data);
  return user.save();
};

const getUsers = () => User.find();

module.exports = { createUser, getUsers };
