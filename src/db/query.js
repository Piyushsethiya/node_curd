// Insert data
async function createListing(client, newList) {
  const result = await client
    .db("mudb")
    .collection("users")
    .insertMany(newList);
  console.log(
    `New listing created with the following id: ${result.insertedCount}`
  );
  console.log(result.insertedIds);
}

// delete data
async function deleteListingByName(client, nameOfListing) {
  const result = await client
    .db("mudb")
    .collection("users")
    .deleteOne({ id: nameOfListing });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

// select data
async function printIfListingExists(client, nameOfListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

    if (result) {
        if (result.last_scraped) {
            console.log(`Found a listing in the collection with the name '${nameOfListing}'. Listing was last scraped ${result.last_scraped}.`);
        } else {
            console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
        }
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
module.exports = [createListing, deleteListingByName, printIfListingExists];
