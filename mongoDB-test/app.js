require('dotenv').config();
const mongoose = require('mongoose');
const { 
  createUser, 
  readUser, 
  updateUser, 
  deleteUser 
} = require('./dbQuery');

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