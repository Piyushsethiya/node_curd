// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
const { MongoClient } = require("mongodb");
const user_data = require('./src/model/userData.js');

async function create() {
  const uri ="mongodb://localhost:27017/";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // console.log(user_data);

    await createListing(client, user_data);
    // Make the appropriate DB calls
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

create().catch(console.error);

// Add functions that make DB calls here
async function createListing(client, newListing) {
  const result = await client.db("mudb").collection("users").insertMany(newListing);
  console.log(`New listing created with the following id: ${result.insertedCount}`);
  console.log(result.insertedIds);

}
// async function createMultipleListings(client, newListings){
//   // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertMany for the insertMany() docs
//   const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

//   console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
//   console.log(result.insertedIds);
// }
