// const Http = require('http');
// const users = require('../model/userData');

// const getUser = (req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.end(JSON.stringify(users));
// }
const express = require('express');
const [createListing, deleteListingByName, printIfListingExists] = require('../db/query.js');
const user_data = require('../model/userData');
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";s
const client = new MongoClient(url);

// async function create(){
//     await client.connect();
//     await createListing(client, user_data);
// }
// create().catch(console.error);

async function delete_data(){
    await client.connect();
    await deleteListingByName(client, 5)
}
delete_data().catch(console.error);