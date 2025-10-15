const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("connection established to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

const initDb = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:'68e62dbebee529810d5bdd2f'}));
    await Listing.insertMany(initData.data);
    console.log("Data has been initialised");
};

initDb();