require('dotenv').config();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const UserModel = require('./userSchema');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pbnf5.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  await createUser('jeffrey', '123456');
  await updateUser('jeffrey', 'jeffreycao');
  await readUser('jeffreycao');
  await deleteUser('jeffreycao');

  db.close();
});

// Create
const createUser = async (username, password) => {
  const user = new UserModel({
    username,
    password
  });

  try {
    const savedData = await user.save();
    console.log(`Saved User: ${savedData}`);
  } catch(err) {
    console.log(`Error: ${err}`);
  }
}

// Read
const readUser = async (username) => {
  try {
    const query = { username }
    const user = await UserModel.findOne(query);
    console.log(`Found User: ${user}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// Update
const updateUser = async (oldName, newName) => {
  try {
    const query = { username: oldName };
    const updatedUser = await UserModel.findOneAndUpdate(query, { username: newName });
    console.log(`User Updated: ${updatedUser}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// Delete
const deleteUser = async (username) => {
  try {
    const query = { username };
    const deletedUser = await UserModel.findOneAndDelete(query);
    console.log(`User Deleted: ${deletedUser}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};