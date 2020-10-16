const UserModel  =require('./userSchema');

// Create
async function createUser(username, password) {
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
async function readUser(username) {
  try {
    const query = { username }
    const user = await UserModel.findOne(query);
    console.log(`Found User: ${user}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// Update
async function updateUser(oldName, newName) {
  try {
    const query = { username: oldName };
    const updatedUser = await UserModel.findOneAndUpdate(query, { username: newName });
    console.log(`User Updated: ${updatedUser}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// Delete
async function deleteUser(username) {
  try {
    const query = { username };
    const deletedUser = await UserModel.findOneAndDelete(query);
    console.log(`User Deleted: ${deletedUser}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser
}