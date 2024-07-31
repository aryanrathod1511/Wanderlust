const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


main().then(()=> {
    console.log("Conected to db.");
}).catch((err)=> {
    console.log(err);
});

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}

const initDb = async () => {
    
    await Listing.insertMany(initData.data);
    console.log("data was initialised");

}
initDb();

