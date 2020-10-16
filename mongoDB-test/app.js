require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pbnf5.mongodb.net/test?retryWrites=true&w=majority`;
const dbName = 'circulation';

async function main() {
  const client = new MongoClient(url);
  await client.connect();

  const admin = client.db(dbName).admin();
}

main();